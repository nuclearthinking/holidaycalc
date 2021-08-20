FROM python:3.9.6-alpine3.14

RUN pip install poetry==$POETRY_VERSION

WORKDIR /app

COPY poetry.lock /app/
COPY pyproject.toml /app/

RUN pip install -r requirements.txt

RUN poetry config virtualenvs.create false \
  && poetry install --no-dev --no-interaction --no-ansi

COPY . /app
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]