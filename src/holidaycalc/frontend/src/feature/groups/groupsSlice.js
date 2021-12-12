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
        }
    }
})

export const {addGroup, addPerson} = groupsSlice.actions