import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditContact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface EditContactState {
  editContact:any[];
}

export const initialState: EditContactState = {
  editContact: [],
};

export const editContactSlice = createSlice({
  name: "editContact",
  initialState,
  reducers: {
    setEditContact: (state, action: PayloadAction<EditContact[]>) => {
      state.editContact = action.payload;
    },
  },
});

export const { setEditContact } = editContactSlice.actions;

export default editContactSlice.reducer;
