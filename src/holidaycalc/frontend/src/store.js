import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from './feature/counter/counterSlice'
import {groupsSlice} from "./feature/groups/groupsSlice";

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        groups: groupsSlice.reducer,
    }
})

