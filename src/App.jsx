import Header from "./components/Header";
import { useState } from "react";
import Contacts from "./components/Contacts.jsx";
function App() {
  const [currentPage, setCurrentPage] = useState("contactList");
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <Contacts currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
