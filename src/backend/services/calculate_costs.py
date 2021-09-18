import asyncio
from dataclasses import dataclass

from backend.entityies.calcuate_costs import Bill, BillType, Calculation, Group, Person


@dataclass
class GroupBalance:
    group: Group
    balance: int


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
    meat_per_person = round(meat_total_spent / meat_eaters, 2)
    alcohol_per_person = round(alcohol_total_spent / alcohol_drinkers, 2)
    general_per_person = round(general_total_spent / general_persons, 2)
    payers = []
    for group in calc.groups:
        group_balance = GroupBalance(
            group=group,
            balance=group.total_spent * -1
        )
        group_balance.balance += meat_per_person * group.meat_eaters_count
        group_balance.balance += alcohol_per_person * group.alcohol_drinkers_count
        group_balance.balance += general_per_person * group.persons_count
        payers.append(group_balance)

    print(payers)


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
