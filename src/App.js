import { useEffect } from "react";
import { v4 } from "uuid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "./redux/contacts/contacts-selectors";
import {
  fetchPhoneBookContacts,
  addPhoneBookContact,
} from "./redux/contacts/contacts-operations";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchPhoneBookContacts());
  }, [dispatch]);

  const formSubmitHandler = ({ name, number }) => {
    if (items.some((item) => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is alerady in your contacts`);
      return;
    }
    dispatch(addPhoneBookContact({ id: v4(), name, number }));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
