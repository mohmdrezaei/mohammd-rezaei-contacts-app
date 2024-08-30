import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { v4 } from "uuid";
function contactForm(props) {
  const { setCurrentPage, contact, setContact, setContacts } = props;
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone)  => phone.length >= 10; 
  
  const addHandler = () => {
    const newErrors = {
      name: !contact.name ? "Name is required." : "",
      email: !contact.email || !validateEmail(contact.email) ? "Invalid email format." : "",
      phone: !contact.phone || !validatePhone(contact.phone) ? "Invalid phone number." : "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      const newContact = { ...contact , id : v4() }
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      email: "",
      phone: "",
    });
    setErrors({
      name: "",
      email: "",
      phone: "",
    })
    console.log(errors)
    setCurrentPage("contactList");
  }
  };
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
        <img
          src={
            contact.name
              ? `https://ui-avatars.com/api/?name=${contact.name[0]}&length=1&background=random&size=262`
              : "https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
          }
          alt="user-profile"
        />
      </div>

 <div className={styles.form}>
        {Object.entries(errors).map(([field, error]) => (
          
          <div key={field} className={styles.inputGroups}>
          
            <img src={`./src/assets/${field}.png`} alt="" />
            <input
              type={field === "email" ? "email" : field === "phone" ? "number" : "text"}
              placeholder={field}
              name={field}
              value={contact[field]}
              onChange={changeHandler}
            />
             <span >{error && error}</span>
          </div>
        ))}
        <button onClick={addHandler}>Create</button>
      </div>
    </div>
  );
}

export default contactForm;
