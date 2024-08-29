import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";

function Contacts(props) {
  const { currentPage, setCurrentPage } = props;
  const [contacts, setContacts] = useState([]);
  const [contact, setCotact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <>
      {currentPage === "contactForm" && (
        <ContactForm
          setCurrentPage={setCurrentPage}
          contact={contact}
          setCotact={setCotact}
          setContacts = {setContacts}
        />
      )}
      {currentPage === "contactList" && <ContactList contacts ={contacts}/>}
    </>
  );
}

export default Contacts;
