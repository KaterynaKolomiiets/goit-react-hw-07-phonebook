import s from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/contacts-actions";

const Filter = () => {
  const dispatch = useDispatch();

  const search = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <input className={s.filter} type="text" name="filter" onChange={search} />
  );
};

export default Filter;
