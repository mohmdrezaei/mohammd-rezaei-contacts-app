import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";

function Contacts(props) {
  const { currentPage, setCurrentPage } = props;
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const deleteHandler = (id)=>{
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
    }
 
  return (
    <>
      {currentPage === "contactForm" && (
        <ContactForm
          setCurrentPage={setCurrentPage}
          contact={contact}
          setContact={setContact}
          setContacts = {setContacts}
        />
      )}
      {currentPage === "contactList" && <ContactList contacts ={contacts} deleteHandler={deleteHandler}/>}
    </>
  );
}

export default Contacts;
