import React, { useState } from "react";
import styles from "./ContactForm.module.css";
function contactForm(props) {
  const {setCurrentPage} = props;
  const [contact, setCotact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="./src/assets/left-arrow.png" alt="" onClick={()=>setCurrentPage("contactList")} />
        <h1>Create Contact</h1>
      </div>
      <div className={styles.profile}>
        <img  src="./src/assets/user-profile.png" alt="" />
      </div>

      <div className={styles.form}>
        <form >
          <div className={styles.inputGroups}>
            <img src="./src/assets/user-icon.png" alt="" />
            <input type="text" placeholder="Name" /> 
          </div>
          <div className={styles.inputGroups}>
          <img src="./src/assets/email.png" alt="" />
            <input type="text" placeholder="email" /> 
          </div>
          <div className={styles.inputGroups}>
          <img src="./src/assets/phone.png" alt="" />
            <input type="text" placeholder="Phone number" /> 
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default contactForm;
