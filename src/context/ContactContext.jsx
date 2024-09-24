import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  setContacts,
  setFilteredContacts,
  setContact,
  setToast,
  setModal,
} from "../actions/actions";

const ContactContext = createContext();

function ContactProvider({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contact.contacts);
  const modal = useSelector((state) => state.contact.modal);

  useEffect(() => {
    axios
      .get("http://localhost:3010/contacts")
      .then((res) => dispatch(setContacts(res.data)))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  useEffect(() => {
    dispatch(setFilteredContacts(contacts));
  }, [contacts]);

  const showToast = (message, icon) => {
    dispatch(setToast({ show: true, message, icon }));
    setTimeout(() =>
      dispatch(setToast({ show: false, message: "", icon: "" }), 3000)
    );
  };
  const deleteHandler = (ids) => {
    if (Array.isArray(ids) && ids.length > 1) {
      dispatch(
        setModal({
          show: true,
          message: `Are you sure you want to delete these ${ids.length} contacts?`,
          ids,
        })
      );
    } else {
      dispatch(
        setModal({
          show: true,
          message: "Are you sure you want to delete this contact?",
          ids,
        })
      );
    }
  };

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

  const editHandler = (e, contact) => {
    e.stopPropagation();
    navigate(`contact/edit/${contact.id}`);
    dispatch(setContact({ ...contact, isEditing: true }));
  };

  return (
    <ContactContext.Provider
      value={{ confirmDelete, deleteHandler, showToast, editHandler }}
    >
      {children}
    </ContactContext.Provider>
  );
}

const useContact = () => {
  const contact = useContext(ContactContext);
  return contact;
};

export default ContactProvider;
export { useContact };
