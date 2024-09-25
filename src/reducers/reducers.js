import { combineReducers } from "redux";
import {
  SET_CONTACTS,
  SET_FILTERED_CONTACTS,
  SET_CONTACT,
  SET_TOAST,
  SET_MODAL,
  CONFIRM_DELETE,
} from "../actions/actions";

const initialState = {
  contacts: [],
  filteredContacts: [],
  contact: {
    id: "",
    name: "",
    email: "",
    phone: "",
    photo: "",
    isEditing: false,
  },
  toast: { show: false, message: "", icon: "" },
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
    case CONFIRM_DELETE:
      const newContacts = state.contacts.filter(
        (contact) => !state.modal.ids.includes(contact.id)
      );
      return {
        ...state,
        contacts: newContacts,
        filteredContacts: newContacts,
        modal: { show: false, ids: [] },
        toast: {
          show: true,
          message: Array.isArray(state.modal.ids)
          ? `${state.modal.ids.length} contacts deleted!`
          : ' contact deleted.',
          icon: "./src/assets/check.png",
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contact: contactReducer,
});

export default rootReducer;
