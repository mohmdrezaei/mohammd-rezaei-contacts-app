import React, { useState } from "react";
import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteHandler, editHandler }) {
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedContacts , setSelectedContacts] = useState([])

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };
  
  const contactSelectHandler = (id)=>{
    
   setSelectedContacts((selected => 
    selected.includes(id)
    ?selected.filter(contactId => contactId !== id)
    : [... selected , id]
   ))
  }

  const deleteSelectedHandler = () => {
    if(selectedContacts.length === 0){
      alert("Select at least one item")
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
                onClick={toggleCheckboxes}
              />)
              :(
                <img
                title="Group Delete"
                className={styles.groupDelete}
                src={"./src/assets/trash-bin.png"}
                onClick={deleteSelectedHandler}
              />
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
                deleteHandler={deleteHandler}
                editHandler={editHandler}
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
