import asyncio
from dataclasses import dataclass
from typing import Optional

from backend.entityies.calcuate_costs import Bill, BillType, Calculation, Group, Person


@dataclass
class GroupBalance:
    group: Group
    balance: int


@dataclass
class PaymentAction:
    payer: str
    recepient: str
    amount: float


async def calculate_spendinds(calc: Calculation) -> None:
    alcohol_drinkers = 0
    meat_eaters = 0
    general_persons = 0
    general_total_spent = 0
    alcohol_total_spent = 0
    meat_total_spent = 0
    for group in calc.groups:
        alcohol_drinkers += group.alcohol_drinkers_count
        meat_eaters += group.meat_eaters_count
        general_persons += group.persons_count
        general_total_spent += group.general_spent
        alcohol_total_spent += group.alcohol_spent
        meat_total_spent += group.meat_spent
    meat_per_person = meat_total_spent / meat_eaters
    alcohol_per_person = alcohol_total_spent / alcohol_drinkers
    general_per_person = general_total_spent / general_persons
    payers = []
    for group in calc.groups:
        group_balance = GroupBalance(
            group=group,
            balance=group.total_spent * -1
        )
        group_balance.balance += meat_per_person * group.meat_eaters_count
        group_balance.balance += alcohol_per_person * group.alcohol_drinkers_count
        group_balance.balance += general_per_person * group.persons_count
        group_balance.balance = group_balance.balance
        payers.append(group_balance)

    result_actions: list[PaymentAction] = []
    sub_total = sum([i.balance for i in payers])
    while any([payer.balance for payer in payers]):
        payer = get_next_proficit(payers)
        recepient = get_next_deficit(payers)
        if payer.balance > abs(recepient.balance):
            result_actions.append(
                PaymentAction(
                    payer=payer.group.name,
                    recepient=recepient.group.name,
                    amount=abs(recepient.balance),
                )
            )
            payer.balance -= abs(recepient.balance)
            recepient.balance = 0
        else:
            result_actions.append(
                PaymentAction(
                    payer=payer.group.name,
                    recepient=recepient.group.name,
                    amount=payer.balance,
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


config = Calculation(
    groups=[
        Group(
            name='Famaly 1',
            persons=[
                Person(
                    name='Vasiliy',
                    drinks_alcohol=True,
                    eat_meat=True,
                ),
                Person(
                    name='Kristina',
                    drinks_alcohol=True,
                    eat_meat=False,
                )
            ],
            spending=[
                Bill(
                    amount=3500,
                    bill_type=BillType.general,
                ),
                Bill(
                    amount=5000,
                    bill_type=BillType.alcohol,
                ),
            ]
        ),
        Group(
            name='Family 2',
            persons=[
                Person(
                    name='Dima',
                    drinks_alcohol=True,
                    eat_meat=True,
                ),
                Person(
                    name='Vika',
                    drinks_alcohol=False,
                    eat_meat=True,
                ),
            ],
            spending=[
                Bill(
                    amount=300,
                    bill_type=BillType.general,
                ),
                Bill(
                    amount=1390,
                    bill_type=BillType.meat,
                ),
            ]
        ),
        Group(
            name='Family 3',
            persons=[
                Person(
                    name='Dima',
                    drinks_alcohol=True,
                    eat_meat=True,
                ),
                Person(
                    name='Vika',
                    drinks_alcohol=True,
                    eat_meat=True,
                ),
            ],
            spending=[
                Bill(
                    amount=300,
                    bill_type=BillType.general,
                ),
                Bill(
                    amount=1390,
                    bill_type=BillType.meat,
                ),
                Bill(
                    amount=15000,
                    bill_type=BillType.general,
                )
            ]
        ),
        Group(
            name='Family 4',
            persons=[
                Person(
                    name='Dima',
                    drinks_alcohol=True,
                    eat_meat=True,
                ),
                Person(
                    name='Vika',
                    drinks_alcohol=True,
                    eat_meat=True,
                ),
            ],
            spending=[
                Bill(
                    amount=300,
                    bill_type=BillType.general,
                ),
                Bill(
                    amount=1390,
                    bill_type=BillType.meat,
                ),
                Bill(
                    amount=3678,
                    bill_type=BillType.alcohol,
                )
            ]
        ),
        Group(
            name='Family 5',
            persons=[
                Person(
                    name='Dima',
                    drinks_alcohol=False,
                    eat_meat=True,
                )
            ],
            spending=[
                Bill(
                    amount=300,
                    bill_type=BillType.general,
                )
            ]
        ),

    ]
)

asyncio.get_event_loop().run_until_complete(calculate_spendinds(config))
