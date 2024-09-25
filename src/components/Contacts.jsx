import { useSelector, useDispatch } from "react-redux";
import { setModal, setContacts } from "../actions/actions.js";
import { Route, Routes } from "react-router-dom";
import { useContact } from "../context/ContactContext.jsx";
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Toast from "./toast/Toast.jsx";
import Modal from "./modal/Modal.jsx";
import ContactDetails from "./contactDetails/ContactDetails.jsx";

import NotFoundPage from "./notFound/NotFoundPage.jsx";

function Contacts() {
  const dispatch = useDispatch();

 const {showToast} =useContact()
  const modal = useSelector((state) => state.contact.modal);
  const contacts = useSelector((state) => state.contact.contacts);
  const toast = useSelector((state) => state.contact.toast);

  const confirmDelete = () => {
    const newContacts = contacts.filter(
      (contact) => !modal.ids.includes(contact.id)
    );
    dispatch(setContacts(newContacts));
    showToast(
      !Array.isArray(modal.ids)
        ? "Contact deleted!"
        : `${modal.ids.length} contacts deleted!`,
      "./src/assets/check.png"
    );

    dispatch(setModal({ show: false, ids: [] }));
  };

  const handleCloseModal = () => {
    dispatch(setModal({ show: false, ids: [] }));
  };

  return (
    <>
      <Modal
        show={modal.show}
        onClose={handleCloseModal}
        onConfirm={confirmDelete}
        message={modal.message}
      />
      <Toast message={toast.message} show={toast.show} icon={toast.icon} />
      <Routes>
        <Route path="addContact" element={<ContactForm />} />
        <Route path="/" element={<ContactList />} />
        <Route path="contactDetails/:id" element={<ContactDetails />} />
        <Route path="contact/edit/:id" element={<ContactForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Contacts;
