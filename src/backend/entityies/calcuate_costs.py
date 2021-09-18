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

    @property
    def alcohol_spent(self) -> int:
        spent = 0
        for i in self.spending:
            if i.bill_type == BillType.alcohol:
                spent += i.amount
        return spent

    @property
    def meat_spent(self) -> int:
        spent = 0
        for i in self.spending:
            if i.bill_type == BillType.meat:
                spent += i.amount
        return spent

    @property
    def general_spent(self) -> int:
        spent = 0
        for i in self.spending:
            if i.bill_type == BillType.general:
                spent += i.amount
        return spent

    @property
    def total_spent(self) -> int:
        return sum(i.amount for i in self.spending)

    @property
    def persons_count(self) -> int:
        return len(self.persons)

    @property
    def alcohol_drinkers_count(self) -> int:
        return len(list(filter(lambda x: x.drinks_alcohol, self.persons)))

    @property
    def meat_eaters_count(self) -> int:
        return len(list(filter(lambda x: x.eat_meat, self.persons)))


@dataclass
class Calculation:
    groups: list[Group]
