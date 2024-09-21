import { useContext, useState } from "react";
import styles from "./Header.module.css";
import { useContact } from "../context/ContactContext";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png"
import search from "../assets/search.png"
import add from "../assets/add.png"

function Header() {
  const { contacts, setFilteredContacts } = useContact();
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
    setFilteredContacts(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
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
     

      <div
        className={styles.addBtn}
        
      >
        
        <img src={add}alt="" />
        <Link to="addContact"> Create contact</Link>
      </div>
    </div>
  );
}

export default Header;
