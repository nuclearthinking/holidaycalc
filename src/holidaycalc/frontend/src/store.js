import {configureStore} from "@reduxjs/toolkit";
import {groupsSlice} from "./feature/groups/groupsSlice";

export default configureStore({
    reducer: {
        groups: groupsSlice.reducer,
    }
})

