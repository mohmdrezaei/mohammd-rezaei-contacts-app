import React from "react";
import styles from "./ContactList.module.css";
function ContactItem({ data, deleteHandler ,editHandler}) {
  return (
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td className={styles.opration}>
        <button onClick={()=>editHandler(data)}>
          <img src="./src/assets/pencil.png"></img>
        </button>
        <button onClick={() => deleteHandler(data.id)}>
          <img src="./src/assets/trash-bin.png"></img>
        </button>
      </td>
    </tr>
  );
}

export default ContactItem;
