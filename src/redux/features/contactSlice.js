import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = [...state.contacts, ...action.payload];
    },
    updateContact: (state, action) => {
      console.log("updated slce ",action.payload)
      const { id, updatedContact } = action.payload;
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
  },
});

export const { setContacts , updateContact} = contactSlice.actions;

export default contactSlice.reducer;
