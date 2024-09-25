import { useState } from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilteredContacts, setContact } from "../actions/actions";

import logo from "../assets/logo.png";
import search from "../assets/search.png";
import add from "../assets/add.png";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterContacts(value);
  };

  const filterContacts = (term) => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(term.toLowerCase()) ||
        contact.email.toLowerCase().includes(term.toLowerCase())
    );
    dispatch(setFilteredContacts(filtered));
  };
  const addBtnHandler = () => {
    navigate("addContact");
    dispatch(
      setContact({
        name: "",
        email: "",
        phone: "",
        photo: "",
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon} onClick={() => navigate("/")}>
        <img src={logo} alt="" />
        <p>Contact App</p>
      </div>
      <div className={styles.search}>
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.addBtn} onClick={addBtnHandler}>
        <img src={add} alt="" />
        <a> Create contact</a>
      </div>
    </div>
  );
}

export default Header;
