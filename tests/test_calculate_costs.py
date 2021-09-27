from decimal import Decimal

import pytest

from backend.entityies.calcuate_costs import Bill, BillType, EventParams, Group, PaymentAction, Person
from backend.services.calculate_costs import calculate_spendinds


@pytest.mark.gen_test
@pytest.mark.parametrize(
    'params,expected',
    [
        (EventParams(
            groups=[
                Group(
                    name='Famaly 1',
                    persons=[
                        Person(name='Vasiliy', drinks_alcohol=True, eat_meat=True)
                    ],
                    spending=[
                        Bill(amount=100, bill_type=BillType.general),
                    ]
                ),
                Group(
                    name='Family 2',
                    persons=[
                        Person(name='Dima', drinks_alcohol=True, eat_meat=True),
                    ],
                    spending=[]
                )
            ]
        ),
         [PaymentAction(payer='Family 2', recepient='Famaly 1', amount=50.0)]),
        (EventParams(
            groups=[
                Group(
                    name='Famaly 1',
                    persons=[
                        Person(name='Vasiliy', drinks_alcohol=True, eat_meat=True)
                    ],
                    spending=[
                        Bill(amount=100, bill_type=BillType.alcohol),
                    ]
                ),
                Group(
                    name='Family 2',
                    persons=[
                        Person(name='Dima', drinks_alcohol=False, eat_meat=True),
                    ],
                    spending=[]
                )
            ]
        ),
         []),
        (EventParams(groups=[
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
        ),
         [
             PaymentAction(payer='Family 2', recepient='Famaly 1', amount=1121.55),
             PaymentAction(payer='Family 2', recepient='Family 3', amount=3848.44),
             PaymentAction(payer='Family 4', recepient='Family 3', amount=2531.70),
             PaymentAction(payer='Family 5', recepient='Family 3', amount=2410.14)
         ]),
        (EventParams(
            groups=[
                Group(
                    name='Famaly 1',
                    persons=[
                        Person(name='Person 1', drinks_alcohol=True, eat_meat=True),
                        Person(name='Person 2', drinks_alcohol=True, eat_meat=True),
                    ],
                    spending=[
                        Bill(amount=333, bill_type=BillType.meat),
                        Bill(amount=3000, bill_type=BillType.general),
                    ]
                ),
                Group(
                    name='Family 2',
                    persons=[
                        Person(name='Person 3', drinks_alcohol=True, eat_meat=True),
                    ],
                    spending=[
                        Bill(amount=5500, bill_type=BillType.alcohol),
                        Bill(amount=300, bill_type=BillType.general),
                    ]
                )
            ]
        ),
         [PaymentAction(payer='Famaly 1', recepient='Family 2', amount=2755.66)]),
    ]
)
async def test_calculate_costs(params, expected):
    # act
    result = await calculate_spendinds(params)
    # assert
    assert result == expected
