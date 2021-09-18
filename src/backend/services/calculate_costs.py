import asyncio
from dataclasses import dataclass

from backend.entityies.calcuate_costs import Bill, BillType, Calculation, Group, Person


@dataclass
class GroupBalance:
    group: Group
    general_balance: int
    meat_balance: int
    alcohol_balance: int


async def calculate_spendinds(calc: Calculation) -> None:
    alcohol_drinkers = 0
    meat_eaters = 0
    general_persons = 0
    general_total_spent = 0
    alcohol_total_spent = 0
    meat_total_spent = 0
    for group in calc.groups:
        alcohol_drinkers += group.get_alcohol_drinkers_count()
        meat_eaters += group.get_meat_eaters_count()
        general_persons += group.get_persons_count()
        general_total_spent += group.get_general_spent()
        alcohol_total_spent += group.get_alcohol_spent()
        meat_total_spent += group.get_meat_spent()
    meat_per_person = meat_total_spent / meat_eaters
    alcohol_per_person = alcohol_total_spent / alcohol_drinkers
    general_per_person = general_total_spent / general_persons
    payers = []
    for group in calc.groups:
        payers.append(GroupBalance(
            group=group,
            general_balance=group.get_general_spent(),
            meat_balance=group.get_meat_spent(),
            alcohol_balance=group.get_alcohol_spent(),
        ))
    print()

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
            name='Family 3',
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
        )
    ]
)

asyncio.get_event_loop().run_until_complete(calculate_spendinds(config))
