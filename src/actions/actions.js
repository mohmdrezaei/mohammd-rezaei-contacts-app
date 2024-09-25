export const SET_CONTACTS = "SET_CONTACTS";
export const SET_FILTERED_CONTACTS = "SET_FILTERED_CONTACTS";
export const SET_CONTACT = "SET_CONTACT";
export const SET_TOAST = "SET_TOAST";
export const SET_MODAL = "SET_MODAL";
export const CONFIRM_DELETE = 'CONFIRM_DELETE';

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const setFilteredContacts = (filteredContacts) => ({
  type: SET_FILTERED_CONTACTS,
  payload: filteredContacts,
});

export const setContact = (contact) => ({
  type: SET_CONTACT,
  payload: contact,
});

export const setToast = (toast) => ({
  type: SET_TOAST,
  payload: toast,
});

export const setModal = (modal) => ({
  type: SET_MODAL,
  payload: modal,
});
  
  export const confirmDelete = () => ({
    type: CONFIRM_DELETE,
  });