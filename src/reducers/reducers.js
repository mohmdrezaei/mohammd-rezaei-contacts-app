import { combineReducers } from 'redux';
import {
    SET_CONTACTS,
    SET_FILTERED_CONTACTS,
    SET_CONTACT,
    SET_TOAST,
    SET_MODAL,
  } from '../actions/actions';

  const initialState = {
    contacts: [],
    filteredContacts: [],
    contact: {
      id: '',
      name: '',
      email: '',
      phone: '',
      photo: '',
      isEditing: false,
    },
    toast: { show: false, message: '', icon: '' },
    modal: { show: false, ids: [] },
  };

  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CONTACTS:
        return { ...state, contacts: action.payload };
      case SET_FILTERED_CONTACTS:
        return { ...state, filteredContacts: action.payload };
      case SET_CONTACT:
        return { ...state, contact: action.payload };
      case SET_TOAST:
        return { ...state, toast: action.payload };
      case SET_MODAL:
        return { ...state, modal: action.payload };
      default:
        return state;
    }
  };

  const rootReducer = combineReducers({
    contact: contactReducer,
  });
  
  export default rootReducer;