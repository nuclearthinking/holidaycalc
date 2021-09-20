import pytest

from backend.entityies.calcuate_costs import Bill, BillType, Calculation, Group, Person
from backend.services.calculate_costs import calculate_spendinds, PaymentAction


@pytest.mark.gen_test
@pytest.mark.parametrize(
    'params,expected',
    [
        (Calculation(
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
    ]
)
async def test_calculate_costs(params, expected):
    # act
    result = await calculate_spendinds(params)

    # assert
    assert result == expected
