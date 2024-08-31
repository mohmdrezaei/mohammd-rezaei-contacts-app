import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";

function Contacts(props) {
  const { currentPage, setCurrentPage ,contacts ,setContacts } = props;
  console.log(contacts)

  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    isEditing: false
  });

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  const editHandler = (contact) => {
    setCurrentPage("contactForm");
    setContact({ ...contact, isEditing: true });
  };
  return (
    <>
      {currentPage === "contactForm" && (
        <ContactForm
          setCurrentPage={setCurrentPage}
          contact={contact}
          setContact={setContact}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}
      {currentPage === "contactList" && (
        <ContactList
          contacts={contacts}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      )}
    </>
  );
}

export default Contacts;
