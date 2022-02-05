import pytest

from holidaycalc.services.calculate_costs import calculate_spendinds, Group, EventParams, Person, Bill, BillType, \
    PaymentAction


@pytest.mark.gen_test
@pytest.mark.parametrize(
    'params,expected',
    [
        (EventParams(
            groups=[
                Group(
                    id='qwe',
                    name='Famaly 1',
                    persons=[
                        Person(name='Vasiliy', drinks_alcohol=True, eat_meat=True)
                    ],
                    spendings=[
                        Bill(amount=100, type=BillType.other),
                    ]
                ),
                Group(
                    id='eew',
                    name='Family 2',
                    persons=[
                        Person(name='Dima', drinks_alcohol=True, eat_meat=True),
                    ],
                    spendings=[]
                )
            ]
        ),
         [PaymentAction(payer='Family 2', recepient='Famaly 1', amount=50.0)]),
        (EventParams(
            groups=[
                Group(
                    id='qq',
                    name='Famaly 1',
                    persons=[
                        Person(name='Vasiliy', drinks_alcohol=True, eat_meat=True)
                    ],
                    spendings=[
                        Bill(amount=100, type=BillType.alcohol),
                    ]
                ),
                Group(
                    id='333',
                    name='Family 2',
                    persons=[
                        Person(name='Dima', drinks_alcohol=False, eat_meat=True),
                    ],
                    spendings=[]
                )
            ]
        ),
         []),
        (EventParams(groups=[
            Group(
                id='eeeeew',
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
                spendings=[
                    Bill(
                        amount=3500,
                        type=BillType.other,
                    ),
                    Bill(
                        amount=5000,
                        type=BillType.alcohol,
                    ),
                ]
            ),
            Group(
                id='eeeeew',
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
                spendings=[
                    Bill(
                        amount=300,
                        type=BillType.other,
                    ),
                    Bill(
                        amount=1390,
                        type=BillType.meat,
                    ),
                ]
            ),
            Group(
                id='33434',
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
                spendings=[
                    Bill(
                        amount=300,
                        type=BillType.other,
                    ),
                    Bill(
                        amount=1390,
                        type=BillType.meat,
                    ),
                    Bill(
                        amount=15000,
                        type=BillType.other,
                    )
                ]
            ),
            Group(
                id='qweqwe',
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
                spendings=[
                    Bill(
                        amount=300,
                        type=BillType.other,
                    ),
                    Bill(
                        amount=1390,
                        type=BillType.meat,
                    ),
                    Bill(
                        amount=3678,
                        type=BillType.alcohol,
                    )
                ]
            ),
            Group(
                id='eeeeew',
                name='Family 5',
                persons=[
                    Person(
                        name='Dima',
                        drinks_alcohol=False,
                        eat_meat=True,
                    )
                ],
                spendings=[
                    Bill(
                        amount=300,
                        type=BillType.other,
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
                    id='eeeeew',
                    name='Famaly 1',
                    persons=[
                        Person(name='Person 1', drinks_alcohol=True, eat_meat=True),
                        Person(name='Person 2', drinks_alcohol=True, eat_meat=True),
                    ],
                    spendings=[
                        Bill(amount=333, type=BillType.meat),
                        Bill(amount=3000, type=BillType.other),
                    ]
                ),
                Group(
                    id='eeeeew',
                    name='Family 2',
                    persons=[
                        Person(name='Person 3', drinks_alcohol=True, eat_meat=True),
                    ],
                    spendings=[
                        Bill(amount=5500, type=BillType.alcohol),
                        Bill(amount=300, type=BillType.other),
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
