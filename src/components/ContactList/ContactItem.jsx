import React from 'react'
import styles from "./ContactList.module.css"
function ContactItem({data:{id , name , email , phone}}) {
  return (
    <tr key={id}>
    <td>{name}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td className={styles.opration}>
       <button><img src="./src/assets/pencil.png"></img></button>
       <button><img src="./src/assets/trash-bin.png"></img></button>
    </td>
  </tr>
  )
}

export default ContactItem