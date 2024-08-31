import Header from "./components/Header";
import { useEffect, useState } from "react";
import Contacts from "./components/Contacts.jsx";
function App() {
  const [currentPage, setCurrentPage] = useState("contactList");
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || []);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  
  useEffect (()=>{
    setFilteredContacts(contacts)
  }, [contacts])
  return (
    <>
      <Header setCurrentPage={setCurrentPage} contacts={contacts}
        setFilteredContacts={setFilteredContacts} />
      <Contacts
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        contacts={filteredContacts}
        setContacts={setContacts}
      />
    </>
  );
}

export default App;
