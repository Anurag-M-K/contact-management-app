import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = [...state.contacts, ...action.payload];
    },
    updateContact: (state, action: PayloadAction<{ id: string; updatedContact: Contact }>) => {
      const { id, updatedContact } = action.payload;
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { setContacts, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
