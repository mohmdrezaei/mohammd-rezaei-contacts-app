import React, { useState } from "react";
import styles from "./ContactForm.module.css";
function contactForm(props) {
  const { setCurrentPage,contact , setCotact ,setContacts } = props;
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCotact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler =()=>{
      setContacts(contacts => ([...contacts, contact]))
      setCotact({
        name: "",
        email: "",
        phone: "",
      })
      setCurrentPage("contactList")
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          src="./src/assets/left-arrow.png"
          alt=""
          onClick={() => setCurrentPage("contactList")}
        />
        <h1>Contact List</h1>
      </div>
      <div className={styles.profile}>
        <img src="./src/assets/user-profile.png" alt="" />
      </div>

      <div className={styles.form}>
          <div className={styles.inputGroups}>
            <img src="./src/assets/user-icon.png" alt="" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={contact.name}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputGroups}>
            <img src="./src/assets/email.png" alt="" />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={contact.email}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputGroups}>
            <img src="./src/assets/phone.png" alt="" />
            <input
              type="number"
              placeholder="Phone number"
              name="phone"
              value={contact.phone}
              onChange={changeHandler}
            />
          </div>
          <button onClick={addHandler}>
            Create
          </button>
      </div>
    </div>
  );
}

export default contactForm;
