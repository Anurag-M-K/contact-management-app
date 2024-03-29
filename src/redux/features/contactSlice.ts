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
        // Set contacts action to update the state with an array of contacts
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = [...state.contacts, ...action.payload];
    },
        // Update contact action to update a specific contact in the state
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
        // Delete contact action to remove a specific contact from the state
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Export the actions generated by the contactSlice
export const { setContacts, updateContact, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
