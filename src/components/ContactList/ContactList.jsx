import React from 'react'
import styles from "./ContactList.module.css"

function ContactList({contacts}) {
  
  console.log(contacts)
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
          <p>Contacts (20)</p>
        </div>

        <tbody>
          {contacts.map(contact => (
            <tr>
              <td><img src={contact.profileImageUrl}></img>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className={styles.opration}>
                 <button><img src="./src/assets/pencil.png"></img></button>
                 <button><img src="./src/assets/trash-bin.png"></img></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList