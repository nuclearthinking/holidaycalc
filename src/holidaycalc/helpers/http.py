import json
from json import JSONDecodeError

import marshmallow_dataclass
from marshmallow import Schema, ValidationError


def camelize(value):
    parts = iter(value.split("_"))
    return next(parts) + "".join(i.title() for i in parts)


class LowerCamelCaseSchema(Schema):

    def on_bind_field(self, field_name, field_obj):
        field_obj.data_key = camelize(field_obj.data_key or field_name)


def generate_schema(claz) -> Schema:
    return marshmallow_dataclass.class_schema(claz, base_schema=LowerCamelCaseSchema)()


def api_schema(request_schema: Schema, response_schema: Schema):
    def decorator(func):
        async def wrapper(*args, **kwargs):
            try:
                request_body = args[0].request.body.decode('utf-8')
                data = request_schema.loads(request_body)
            except JSONDecodeError:
                args[0].set_status(status_code=400)
                args[0].finish(json.dumps({
                    'error': 'invlaid json'
                }))
                return
            except ValidationError as e:
                args[0].set_status(status_code=400)
                args[0].finish(json.dumps(e.messages))
                return
            response_entity = await func(*args, request=data, **kwargs)
            response = response_schema.dumps(response_entity)
            args[0].set_status(status_code=200)
            args[0].finish(response)
            return

        return wrapper

    return decorator
