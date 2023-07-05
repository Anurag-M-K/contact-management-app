import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = [...state.contacts, ...action.payload];
    },
    updateContact: (
      state,
      action: PayloadAction<{ id: string; updatedContact: Contact }>
    ) => {
      console.log("action paylod from sloice ", action.payload);
      const { id, updatedContact } = action.payload;
      console.log("contacts from slice ", id);

      state.contacts = state.contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      );
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, updateContact, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
