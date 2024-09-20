import { useContext, useState } from "react";
import styles from "./Header.module.css";
import { useContact } from "../context/ContactContext";

function Header() {
  const { setCurrentPage, contacts, setFilteredContacts ,setContact} = useContact();
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
  const routeHandler = () => {
    setCurrentPage("contactForm");
       setContact({
        id: "",
      name: "",
      email: "",
      phone: "",
      photo: "",
       })
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="./src/assets/logo.png" alt="" />
        <p>Contact App</p>
      </div>
      <div className={styles.search}>
        <img src="./src/assets/search.png" alt="" />
        <input
          type="text"
          placeholder="Search"
           value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
     

      <div
        className={styles.addBtn}
        onClick={routeHandler}
      >
        <img src="./src/assets/add.png" alt="" />
        <p>Create contact</p>
      </div>
    </div>
  );
}

export default Header;
