
import Contacts from "./components/Contacts.jsx";
import Header from "./components/Header.jsx";
import ContactProvider from "./context/ContactContext.jsx";



function App() {


  return (
    <ContactProvider>
      <Header />
      <Contacts />
    </ContactProvider>
  );
}

export default App;
