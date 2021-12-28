from dataclasses import dataclass
from decimal import Decimal, ROUND_HALF_UP
from typing import Optional

from holidaycalc.entityies.calcuate_costs import EventParams, Group, PaymentAction

cent = Decimal('0.01')


@dataclass
class GroupBalance:
    group: Group
    balance: Decimal


def prepare_data(groups: list[Group]) -> list[Group]:
    for group in groups:
        for s in group.spendings:
            if isinstance(s.amount, str):
                s.amount = 0
    return groups


async def calculate_spendinds(event: EventParams) -> list[PaymentAction]:
    groups = prepare_data(event.groups)
    alcohol_drinkers = 0
    meat_eaters = 0
    general_persons = 0
    general_total_spent = 0
    alcohol_total_spent = 0
    meat_total_spent = 0
    for group in groups:
        alcohol_drinkers += group.alcohol_drinkers_count
        meat_eaters += group.meat_eaters_count
        general_persons += group.persons_count
        general_total_spent += group.general_spent
        alcohol_total_spent += group.alcohol_spent
        meat_total_spent += group.meat_spent

    meat_per_person = Decimal.from_float(meat_total_spent / meat_eaters).quantize(cent, ROUND_HALF_UP)
    alcohol_per_person = Decimal.from_float(alcohol_total_spent / alcohol_drinkers).quantize(cent, ROUND_HALF_UP)
    general_per_person = Decimal.from_float(general_total_spent / general_persons).quantize(cent, ROUND_HALF_UP)
    payers = []
    for group in event.groups:
        group_balance = GroupBalance(
            group=group,
            balance=Decimal(group.total_spent * -1.0)
        )
        group_balance.balance += Decimal(meat_per_person * group.meat_eaters_count)
        group_balance.balance += Decimal(alcohol_per_person * group.alcohol_drinkers_count)
        group_balance.balance += Decimal(general_per_person * group.persons_count)
        payers.append(group_balance)

    result_actions: list[PaymentAction] = []
    while any([payer.balance for payer in payers if abs(payer.balance) > 1]):
        payer = get_next_proficit(payers)
        recepient = get_next_deficit(payers)
        if payer.balance > abs(recepient.balance):
            result_actions.append(
                PaymentAction(
                    payer=payer.group.name,
                    recepient=recepient.group.name,
                    amount=float(abs(recepient.balance)),
                )
            )
            payer.balance -= abs(recepient.balance)
            recepient.balance = 0
        else:
            result_actions.append(
                PaymentAction(
                    payer=payer.group.name,
                    recepient=recepient.group.name,
                    amount=float(payer.balance),
                )
            )
            recepient.balance += payer.balance
            payer.balance = 0
    return result_actions


def get_next_proficit(actors: list[GroupBalance]) -> Optional[GroupBalance]:
    for i in actors:
        if i.balance > 0:
            return i
    return None


def get_next_deficit(actors: list[GroupBalance]) -> Optional[GroupBalance]:
    for i in actors:
        if i.balance < 0:
            return i
    return None
