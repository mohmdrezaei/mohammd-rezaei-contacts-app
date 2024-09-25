import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import Contacts from './components/Contacts.jsx';
import Header from './components/Header.jsx';
import ContactProvider from './context/ContactContext.jsx';
import { setContacts, setFilteredContacts } from "./actions/actions";
import axios from 'axios';
function App() {
  
 

  
  return (
    <ContactProvider >
      <Header />
      <Contacts />
    </ContactProvider>
  );
}

export default App;
