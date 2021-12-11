import {createSlice} from "@reduxjs/toolkit"

const initialState = []

export const groupsSlice = createSlice({
    name: 'groups',
    initialState: initialState,
    reducers: {
        groupAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const {groupAdded} = groupsSlice.actions