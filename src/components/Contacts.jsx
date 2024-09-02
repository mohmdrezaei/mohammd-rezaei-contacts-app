import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Toast from "./toast/Toast.jsx";
import Modal from "./modal/Modal.jsx";
import ContactDetails from "./ContactList/ContactDetails.jsx";

function Contacts(props) {
  const { currentPage, setCurrentPage, contacts, setContacts } = props;
  const [toast, setToast] = useState({ show: false, message: "" ,icon:""});
  const [modal, setModal] = useState({ show: false, ids: [] });
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    photo: "",
    isEditing: false,
  });

  const showToast = (message , icon) => {
    setToast({ show: true, message ,icon });
    setTimeout(() => setToast({ show: false, message: "" ,icon:"" }), 3000);
  };
  const deleteHandler = (e,ids) => {
    if (ids) {
      e.stopPropagation();
    }
    setModal({ show: true, ids });
    
  };

  const confirmDelete  = (e) => {
    e.stopPropagation()
      const newContacts = contacts.filter(
        (contact) => !modal.ids.includes(contact.id)
      );
      setContacts(newContacts);
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      showToast("Contact deleted!", "./src/assets/check.png");
      setModal({ show: false, ids: [] });
  };
  const closeModal = () => {
    setModal({ show: false, ids: [] });
  };

  const editHandler = (e,contact) => {
    e.stopPropagation()
    setCurrentPage("contactForm");
    setContact({ ...contact, isEditing: true });
  };

  const contactClickHandler = (contact) => {
    setContact(contact)
    setCurrentPage("contactDetails");
};

const routeHandler = () => {
  setCurrentPage("contactList");
  setContact({ isEditing: false });
};

  return (
    <>
    <Modal
        show={modal.show}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete the contact?"
      />
      <Toast message={toast.message} show={toast.show} icon={toast.icon} />
      {currentPage === "contactForm" && (
        <ContactForm
          contact={contact}
          setContact={setContact}
          contacts={contacts}
          setContacts={setContacts}
          showToast={showToast}
          routeHandler={routeHandler}
        />
      )}
      {currentPage === "contactList" && (
        <ContactList
          contacts={contacts}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          showToast={showToast}
          contactClickHandler={contactClickHandler}
        />
      )}
      {currentPage === "contactDetails" && (
        <ContactDetails
          contact={contact}
          routeHandler={routeHandler}
        />
      )}
    </>
  );
}

export default Contacts;
