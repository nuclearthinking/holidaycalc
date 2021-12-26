import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = []

export const groupsSlice = createSlice({
    name: 'groups',
    initialState: initialState,
    reducers: {
        addGroup(state, action) {
            state.push(action.payload)
        },
        addPerson(state, action) {
            const {id} = action.payload
            const group = state.find(group => group.id === id)
            console.log(group)
            group.persons.push({
                id: nanoid(),
                name: '',
                drinksAlcohol: true,
                eatMeat: true,
            })
        },
        addSpending(state, action) {
            const {id} = action.payload
            const group = state.find(group => group.id === id)
            group.spendings.push({
                id: nanoid(),
                amount: '123123',
                type: 'other'
            })
        },
        changePersonName(state, action) {
            const {id, name} = action.payload
            let person = null
            for (const group of state) {
                for (const p of group.persons) {
                    if (p.id === id) {
                        person = p;
                    }
                }
            }
            if (person != null) {
                person.name = name
            }
        }
    }
})

export const {addGroup, addPerson, addSpending, changePersonName} = groupsSlice.actions