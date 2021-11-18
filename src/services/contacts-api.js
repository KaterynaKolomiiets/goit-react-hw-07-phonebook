import axios from "axios";

export const fetchContacts = () => {
  return axios
    .get("http://localhost:4040/contacts")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const addContact = ({ name, number, id }) => {
  return axios
    .post("http://localhost:4040/contacts", { name, number, id })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const removeContact = (id) => {
  return axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(() => id)
    .catch((err) => console.log(err));
};
