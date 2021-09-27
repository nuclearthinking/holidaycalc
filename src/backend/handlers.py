import tornado.web

from backend.entityies.calcuate_costs import (
    CalcualteSpendingsRequestSchema, CalculateSpendingsRequest,
    CalculateSpeningsResponse, CalculateSpeningsResponseSchema, EventParams,
)
from backend.helpers.http import api_schema
from backend.services.calculate_costs import calculate_spendinds


class CalculateSpendingsHandler(tornado.web.RequestHandler):

    @api_schema(
        request_schema=CalcualteSpendingsRequestSchema,
        response_schema=CalculateSpeningsResponseSchema,
    )
    async def post(self, request: CalculateSpendingsRequest) -> CalculateSpeningsResponse:
        result = await calculate_spendinds(event=EventParams(
            groups=request.participants,
        ))
        return CalculateSpeningsResponse(payments=result)


class RootHandler(tornado.web.RequestHandler):

    def get(self):
        self.render('index.html')


class NotFoundHandler(tornado.web.RequestHandler):

    def get(self):
        self.write('Not Found')
