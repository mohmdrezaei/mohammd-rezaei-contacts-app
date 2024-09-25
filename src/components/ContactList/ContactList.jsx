import React, { useState } from "react";
import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem";
import { useDispatch ,useSelector } from "react-redux";
import { setToast } from "../../actions/actions";

import warning from "../../assets/warning.png";
import { useContact } from "../../context/ContactContext";



function ContactList() {
  const dispatch = useDispatch()
  const filteredContacts = useSelector((state) => state.contact.filteredContacts)
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedContacts , setSelectedContacts] = useState([])
  const {deleteHandler} = useContact()
  
  const contactSelectHandler = (id)=>{
   setSelectedContacts((selected => 
    selected.includes(id)
    ?selected.filter(contactId => contactId !== id)
    : [... selected , id]
   ))
  }

  const deleteSelectedHandler = () => { 
    if(selectedContacts.length === 0){
      dispatch(setToast({ show: true, message: "You must select at least one item!", icon: warning }));
      setTimeout(() => {
        dispatch(setToast({ show: false, message: "", icon: "" }));
      }, 3000);
      return;
    }
    deleteHandler(selectedContacts);
    setSelectedContacts([]);
    setShowCheckboxes(false)
  };
  
  return (
    <div className={styles.container}>
      <table>
        <thead className={styles.thead}>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Phone Number</th>
            <th>
              Oprations
              {!showCheckboxes ? (
              <img
                title="Group Delete"
                className={styles.groupDelete}
                src={"./src/assets/more.png"}
                onClick={()=>setShowCheckboxes(!showCheckboxes)}
              />)
              :(
                <><img
                title="Group Delete"
                className={styles.groupDelete}
                src={"./src/assets/trash-bin.png"}
                onClick={deleteSelectedHandler}
              />
              <button
              title="cancel"
              className={styles.close}
              onClick={() => setShowCheckboxes(false)}
            >
              &#10006;
            </button>
                </>
              
              )}
            </th>
          </tr>
        </thead>
        
        <thead className={styles.count}>
          <tr>
            <td colSpan="4" >
              Contacts ({filteredContacts.length})
            </td>
          </tr>
        </thead>
       
        {filteredContacts.length ? (
          <tbody>
            {filteredContacts.map((contact) => (
              <ContactItem
                key={contact.id}
                data={contact}
                showCheckbox={showCheckboxes}
                contactSelectHandler={contactSelectHandler}
                isSelected={selectedContacts.includes(contact.id)}
              />
            ))}
          </tbody>
        ) : (
         <tfoot>
          <tr>
            <td>No Contacts Yet!</td>
          </tr>
         </tfoot>
        )}
      </table>
    </div>
  );
}

export default ContactList;
