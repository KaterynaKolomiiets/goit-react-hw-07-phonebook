import s from "./ContactList.module.css";
import ContactListItem from "./ContactListItem";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getItems, getFilter } from "../../redux/contacts/contacts-selectors";
import { removePhoneBookContact } from "../../redux/contacts/contacts-operations";

const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  let contacts = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.ul}>
      {contacts.map((item) => (
        <ContactListItem
          key={v4()}
          props={item}
          onDelete={() => dispatch(removePhoneBookContact(item.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
