import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },
  reducers: {
    removeContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload
      console.log(state.contacts);
    },
    [fetchContacts.rejected](state, { payload }) {
        alert(payload);
        state.error = payload;
        state.isLoading = false;

    },
    [fetchContacts.pending](state, action) {
        state.isLoading = true;
      console.log(state, action);
    },
  },
});

export const { addNewContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
