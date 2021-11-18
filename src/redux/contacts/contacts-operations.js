import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  removeContact,
} from "../../services/contacts-api";

export const fetchPhoneBookContacts = createAsyncThunk(
  "contacts/fetchPhoneBookContacts",
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  }
);

export const addPhoneBookContact = createAsyncThunk(
  "contacts/addPhoneBookContact",
  async (props) => {
    const item = await addContact(props);
    return item;
  }
);

export const removePhoneBookContact = createAsyncThunk(
  "contacts/removePhoneBookContact",
  async (id) => {
    const item = await removeContact(id);
    return item;
  }
);
