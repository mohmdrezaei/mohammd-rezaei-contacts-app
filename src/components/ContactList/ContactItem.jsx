import React from "react";
import styles from "./ContactList.module.css";
function ContactItem({
  data,
  deleteHandler,
  editHandler,
  showCheckbox,
  contactSelectHandler,
  isSelected,
}) {
  
  return (
    <tr key={data.id} >
      <td className={styles.profile}>
        <img src={data.photo} alt="" />
        {data.name}
      </td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td className={styles.opration}>
        <button onClick={() => editHandler(data)}>
          <img src="./src/assets/pencil.png" />
        </button>
        <button onClick={() => deleteHandler(data.id)}>
          <img src="./src/assets/trash-bin.png" />
        </button>{" "}
        {showCheckbox && (
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={isSelected}
            onChange={() => contactSelectHandler(data.id)}
          />
        )}
      </td>
    </tr>
  );
}

export default ContactItem;
