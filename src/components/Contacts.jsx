import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Toast from "./toast/Toast.jsx";
import Modal from "./modal/Modal.jsx";
import ContactDetails from "./contactDetails/ContactDetails.jsx";
import { useContact } from "../context/ContactContext.jsx";
import { Route, Routes } from "react-router-dom";

function Contacts() {
  const { modal, confirmDelete, toast, setModal } = useContact();

  return (
    <>
      <Modal
        show={modal.show}
        onClose={() => setModal({ show: false, ids: [] })}
        onConfirm={confirmDelete}
        message={modal.message}
      />
      <Toast message={toast.message} show={toast.show} icon={toast.icon} />
      <Routes>
        <Route path="addContact" element={<ContactForm />} />
        <Route path="/" element={<ContactList />} />
      </Routes>
      
      
    </>
  );
}

export default Contacts;
