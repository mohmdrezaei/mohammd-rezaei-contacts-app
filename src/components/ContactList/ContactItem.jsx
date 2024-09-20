import React from "react";
import styles from "./ContactList.module.css";
import { useContact } from "../../context/ContactContext";

function ContactItem(props) {
  const { data, showCheckbox, contactSelectHandler, isSelected } = props;
 const {deleteHandler ,editHandler , contactClickHandler} = useContact()

  const deleteContactHandler = (e) => {
    e.stopPropagation();
    deleteHandler(data.id);
  };
  return (
    <tr key={data.id} onClick={() => contactClickHandler(data)}>
      <>
        <td className={styles.profile}>
          <img src={data.photo} alt="" />
          {data.name}
        </td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td className={styles.opration}>
          <button onClick={(e) => editHandler(e, data)}>
            <img src="./src/assets/pencil.png" />
          </button>
          <button onClick={deleteContactHandler}>
            <img src="./src/assets/trash-bin.png" />
          </button>
          {showCheckbox && (
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={isSelected}
              onChange={() => contactSelectHandler(data.id)}
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </td>
      </>
    </tr>
  );
}

export default ContactItem;
