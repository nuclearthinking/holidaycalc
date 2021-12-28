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
        addPerson(state, action) {
            const {id} = action.payload
            const group = state.groups.find(group => group.id === id)
            group.persons.push({
                id: nanoid(),
                name: '',
                drinksAlcohol: true,
                eatMeat: true,
            })
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
            while (payments.length > 0){
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
                return person
            }
        }
    }
    return person
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
    addGroup, addPerson, addSpending,
    changePersonName, toggleDrinksAlcohol, toggleEatMeat,
    changeSpendingAmount, changeSpendingType,
    addPayments,
} = groupsSlice.actions