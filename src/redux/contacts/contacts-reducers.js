import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./contacts-actions";
import {
  fetchPhoneBookContacts,
  addPhoneBookContact,
  removePhoneBookContact,
} from "./contacts-operations";

const itemsReducer = createReducer([], {
  [fetchPhoneBookContacts.fulfilled]: (_, action) => action.payload,
  [addPhoneBookContact.fulfilled]: (state, action) => [
    ...state,
    action.payload,
  ],
  [removePhoneBookContact.fulfilled]: (state, action) =>
    [...state].filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const error = createReducer([], {
  [fetchPhoneBookContacts.rejected]: (_, action) => action.payload,
  [fetchPhoneBookContacts.pending]: () => null,
  [addPhoneBookContact.rejected]: (_, action) => action.payload,
  [addPhoneBookContact.pending]: () => null,
  [removePhoneBookContact.rejected]: (_, action) => action.payload,
  [removePhoneBookContact.pending]: () => null,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: error,
});

export default contactsReducer;
