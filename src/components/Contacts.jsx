import { useSelector, useDispatch } from 'react-redux';
import { setModal, confirmDelete } from '../actions/actions.js';
import ContactForm from "./contactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Toast from "./toast/Toast.jsx";
import Modal from "./modal/Modal.jsx";
import ContactDetails from "./contactDetails/ContactDetails.jsx";

import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./notFound/NotFoundPage.jsx";

function Contacts() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.contact.modal);
  const toast = useSelector((state) => state.contact.toast);

  const handleConfirmDelete = () => {
    dispatch(confirmDelete());
  };

  const handleCloseModal = () => {
    dispatch(setModal({ show: false, ids: [] }));
  };

  return (
    <>
      <Modal
        show={modal.show}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
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
