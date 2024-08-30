import React from 'react'
import styles from "./ContactList.module.css"
import ContactItem from './ContactItem'

function ContactList({contacts}) {
  
  return (
    <div className={styles.container}>
      
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Phone Number</th>
            <th>Opration</th>
          </tr>
        </thead>
        <div className={styles.count}>
          <p>Contacts ({contacts.length})</p>
        </div>
        {contacts.length ? (
        <tbody>
          {contacts.map(contact => (
            <ContactItem key={contact.id} data={contact}/>
          ))}
        </tbody>
         ): <p> No Contacts Yet!</p>}
      </table>

     
    </div>
  )
}

export default ContactList