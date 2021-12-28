import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = []


export const paymentsSlice = createSlice({
    name: 'payments',
    initialState: initialState,
    reducers: {
        addPayments(state, action) {
            const {payments} = action.payload;
            state = payments
        }
    }
})


export const {addPayments} = paymentsSlice.actions