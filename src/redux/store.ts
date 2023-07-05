import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactSlice } from "./features/contactSlice";
import {editContactSlice} from "./features/selectedContactSlice";

// Define RootState type
type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  editContact: editContactSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export default store;
export type { RootState };
