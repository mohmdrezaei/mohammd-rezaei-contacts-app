import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Toast from "./toast/Toast.jsx";
import Modal from "./modal/Modal.jsx";
import ContactDetails from "./contactDetails/ContactDetails.jsx";
import { useContact } from "../context/ContactContext.jsx";

function Contacts() {
  const { currentPage, modal , confirmDelete , toast ,setModal  } = useContact();
 
  return (
    <>
    <Modal
        show={modal.show}
        onClose={()=>setModal({ show: false, ids: [] })}
        onConfirm={confirmDelete}
        message={modal.message}
      />
      <Toast message={toast.message} show={toast.show} icon={toast.icon} />
      {currentPage === "contactForm" && (
        <ContactForm/>
      )}
      {currentPage === "contactList" && (
        <ContactList/>
      )}
      {currentPage === "contactDetails" && (
        <ContactDetails/>
      )}
    </>
  );
}

export default Contacts;
