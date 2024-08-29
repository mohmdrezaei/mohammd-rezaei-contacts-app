import Header from "./components/Header";
import ContactForm from "./components/contactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('contactList');
  return (
    <>
     <Header  setCurrentPage ={setCurrentPage}/>
     {currentPage === 'contactForm' && <ContactForm setCurrentPage ={setCurrentPage} />}
      {currentPage === 'contactList' && <ContactList />}
    </>
  )
}

export default App
