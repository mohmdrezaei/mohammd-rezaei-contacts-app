import Header from "./components/Header";
import { useState } from "react";
import Contacts from "./components/Contacts.jsx";
function App() {
  const [currentPage, setCurrentPage] = useState("contactList");
  const [contacts, setContacts] = useState( JSON.parse(localStorage.getItem("contacts")) || []);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    photo: "",
    isEditing: false,
  });
  const updateContacts = (newContacts) => {
    setContacts(newContacts);
    setFilteredContacts(newContacts);
  };
  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
        setContact={setContact}
      />
      <Contacts
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        contacts={filteredContacts}
        setContacts={updateContacts}
        contact={contact}
        setContact={setContact}
      />
    </>
  );
}

export default App;
