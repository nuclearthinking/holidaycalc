from dataclasses import dataclass

from holidaycalc.helpers.http import generate_schema
from holidaycalc.services.calculate_costs import Group, PaymentAction


@dataclass
class CalculateSpendingsRequest:
    event_name: str
    participants: list[Group]


@dataclass
class CalculateSpeningsResponse:
    payments: list[PaymentAction]


CalcualteSpendingsRequestSchema = generate_schema(CalculateSpendingsRequest)

CalculateSpeningsResponseSchema = generate_schema(CalculateSpeningsResponse)
