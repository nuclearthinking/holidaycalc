import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    groups: [],
    payments: [],
}

export const groupsSlice = createSlice({
    name: 'storage',
    initialState: initialState,
    reducers: {
        addGroup(state, action) {
            state.groups.push(action.payload)
        },
        deleteGroup(state, action) {
            const {id} = action.payload
            state.groups = state.groups.filter(group => group.id !== id)
        },
        addPerson(state, action) {
            const {id} = action.payload
            const group = state.groups.find(group => group.id === id)
            if (!group) {
                return state
            }
            group.persons.push({
                id: nanoid(),
                name: '',
                drinksAlcohol: true,
                eatMeat: true,
            })
        },
        deletePerson(state, action) {
            const {id} = action.payload
            const group = findGroupWithPerson(id, state)
            group.persons = group.persons.filter(person => person.id !== id)
        },
        addSpending(state, action) {
            const {id} = action.payload
            const group = state.groups.find(group => group.id === id)
            group.spendings.push({
                id: nanoid(),
                amount: '',
                type: 'other'
            })
        },
        deleteSpending(state, action) {
            const {id} = action.payload
            const group = findGroupWithSpending(id, state)
            group.spendings = group.spendings.filter(spending => spending.id !== id)
        },
        changePersonName(state, action) {
            const {id, name} = action.payload
            let person = findPerson(id, state)
            if (person != null) {
                person.name = name
            }
        },
        toggleDrinksAlcohol(state, action) {
            const {id} = action.payload;
            const person = findPerson(id, state)
            if (person != null) {
                person.drinksAlcohol = !person.drinksAlcohol
            }
        },
        toggleEatMeat(state, action) {
            const {id} = action.payload
            const person = findPerson(id, state)
            if (person != null) {
                person.eatMeat = !person.eatMeat
            }
        },
        changeSpendingAmount(state, action) {
            const {id, amount} = action.payload
            const spending = findSpending(id, state)
            if (spending != null) {
                spending.amount = amount
            }
        },
        changeSpendingType(state, action) {
            const {id, type} = action.payload
            const spending = findSpending(id, state)
            if (spending != null) {
                spending.type = type
            }
        },
        addPayments(state, action) {
            const {data} = action.payload;
            const payments = state.payments
            if (!data) return
            while (payments.length > 0) {
                payments.pop()
            }
            for (const p of data) {
                payments.push(p)
            }
        }
    }
})

function findPerson(id, state) {
    let person = null
    for (const group of state.groups) {
        for (const person of group.persons) {
            if (person.id === id) {
                return person;
            }
        }
    }
    return person
}

function findGroupWithPerson(id, state) {
    for (const group of state.groups) {
        for (const person of group.persons) {
            if (person.id === id) {
                return group;
            }
        }
    }
}

function findGroupWithSpending(id, state) {
    for (const group of state.groups) {
        for (const spending of group.spendings) {
            if (spending.id === id) {
                return group;
            }
        }
    }
}

function findSpending(id, state) {
    let spending = null
    for (const group of state.groups) {
        for (const spending of group.spendings) {
            if (spending.id === id) {
                return spending
            }
        }
    }
    return spending
}

export const {
    addGroup, deleteGroup,
    addPerson,changePersonName, toggleDrinksAlcohol, toggleEatMeat, deletePerson,
    addSpending,changeSpendingAmount, changeSpendingType, deleteSpending,
    addPayments,
} = groupsSlice.actions