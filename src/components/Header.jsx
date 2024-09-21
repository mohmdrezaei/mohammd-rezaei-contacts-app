import { useContext, useState } from "react";
import styles from "./Header.module.css";
import { useContact } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png"
import search from "../assets/search.png"
import add from "../assets/add.png"

function Header() {
  const navigate = useNavigate()
  const { contacts, setFilteredContacts ,setContact} = useContact();
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
  const addBtnHandler =()=>{
    navigate("addContact")
    setContact({
      name: "",
      email: "",
      phone: "",
      photo: "",
    }); 
  }

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
        onClick={addBtnHandler}
      >
        
        <img src={add}alt="" />
        <a> Create contact</a>
      </div>
    </div>
  );
}

export default Header;
