import {createSlice, nanoid} from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    id: nanoid(),
                    name,
                    number
                }
            }
            
        },
        removeContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {addContact, removeContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer