import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactContext = createContext();

function ContactProvider({ children }) {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    photo: "",
    isEditing: false,
  });
  const [toast, setToast] = useState({ show: false, message: "", icon: "" });
  const [modal, setModal] = useState({ show: false, ids: [] });

  useEffect(() => {
    axios
      .get("http://localhost:3010/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const showToast = (message, icon) => {
    setToast({ show: true, message, icon });
    setTimeout(() => setToast({ show: false, message: "", icon: "" }), 3000);
  };
  const deleteHandler = (ids) => {
    if (Array.isArray(ids) && ids.length > 1) {
      setModal({
        show: true,
        message: `Are you sure you want to delete these ${ids.length} contacts?`,
        ids,
      });
    } else {
      setModal({
        show: true,
        message: "Are you sure you want to delete this contact?",
        ids,
      });
    }
  };

  const confirmDelete = () => {
    const newContacts = contacts.filter(
      (contact) => !modal.ids.includes(contact.id)
    );
    setContacts(newContacts);
    showToast(
      !Array.isArray(modal.ids)
        ? "Contact deleted!"
        : `${modal.ids.length} contacts deleted!`,
      "./src/assets/check.png"
    );

    setModal({ show: false, ids: [] });
  };

  const editHandler = (e, contact) => {
    e.stopPropagation();
    navigate(`contact/edit/${contact.id}`);
    setContact({ ...contact, isEditing: true });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        filteredContacts,
        setFilteredContacts,
        contact,
        setContact,
        toast,
        setToast,
        modal,
        setModal,
        showToast,
        deleteHandler,
        confirmDelete,
        editHandler,
      }}
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
