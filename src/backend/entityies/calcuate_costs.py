from dataclasses import dataclass
from enum import Enum
from typing import List


@dataclass
class Person:
    name: str
    drinks_alcohol: bool
    eat_meat: bool


class BillType(str, Enum):
    meat = 'meat'
    alcohol = 'alcohol'
    general = 'general'


@dataclass
class Bill:
    amount: int
    bill_type: BillType


@dataclass
class Group:
    name: str
    persons: list[Person]
    spending: List[Bill]

    def get_alcohol_spent(self) -> int:
        spent = 0
        for i in self.spending:
            if i.bill_type == BillType.alcohol:
                spent += i.amount
        return spent

    def get_meat_spent(self) -> int:
        spent = 0
        for i in self.spending:
            if i.bill_type == BillType.meat:
                spent += i.amount
        return spent

    def get_general_spent(self) -> int:
        spent = 0
        for i in self.spending:
            if i.bill_type == BillType.general:
                spent += i.amount
        return spent

    def get_persons_count(self) -> int:
        return len(self.persons)

    def get_alcohol_drinkers_count(self) -> int:
        return len(list(filter(lambda x: x.drinks_alcohol, self.persons)))

    def get_meat_eaters_count(self) -> int:
        return len(list(filter(lambda x: x.eat_meat, self.persons)))


@dataclass
class Calculation:
    groups: list[Group]
