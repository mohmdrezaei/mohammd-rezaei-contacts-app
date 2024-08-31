import React from "react";
import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteHandler, editHandler }) {
  console.log(contacts)
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Phone Number</th>
            <th>Opration  <img title="Group Delete" className={styles.groupDelete} src="./src/assets/trash-bin.png" alt="" /></th>
           
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
