import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Toast from "./toast/Toast.jsx";

function Contacts(props) {
  const { currentPage, setCurrentPage, contacts, setContacts } = props;
  const [toast, setToast] = useState({ show: false, message: "" });
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    isEditing: false,
  });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const deleteHandler = (id) => {
    if (confirm("Delete contact?")) {
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      showToast("Contact deleted!");
    }
  };

  const editHandler = (contact) => {
    setCurrentPage("contactForm");
    setContact({ ...contact, isEditing: true });
  };
  return (
    <>
      <Toast message={toast.message} show={toast.show} />
      {currentPage === "contactForm" && (
        <ContactForm
          setCurrentPage={setCurrentPage}
          contact={contact}
          setContact={setContact}
          contacts={contacts}
          setContacts={setContacts}
          showToast={showToast}
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
