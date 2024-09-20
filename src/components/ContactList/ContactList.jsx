import React, { useState } from "react";
import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem";
import { useContact } from "../../context/ContactContext";


function ContactList() {
  const {contacts , deleteHandler ,showToast} = useContact()
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedContacts , setSelectedContacts] = useState([])
  
  const contactSelectHandler = (id)=>{
   setSelectedContacts((selected => 
    selected.includes(id)
    ?selected.filter(contactId => contactId !== id)
    : [... selected , id]
   ))
  }

  const deleteSelectedHandler = () => { 
    if(selectedContacts.length === 0){
      showToast("You must select at least one item!" , "./src/assets/warning.png")
      return;
    }
    deleteHandler(selectedContacts);
    setSelectedContacts([]);
    setShowCheckboxes(false)
  };
  
  return (
    <div className={styles.container}>
      <table>
        <thead>
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
        <div className={styles.count}>
          <p>Contacts ({contacts.length})</p>
        </div>
        {contacts.length ? (
          <tbody>
            {contacts.map((contact) => (
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
          <p> No Contacts Yet!</p>
        )}
      </table>
    </div>
  );
}

export default ContactList;
