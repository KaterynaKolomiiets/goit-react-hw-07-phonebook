import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/contacts-reducers";

const rootReducer = combineReducers({ contacts: contactsReducer });

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
