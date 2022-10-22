import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice"
import { filterReducer } from "./filterSlice";
export let store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    }
})