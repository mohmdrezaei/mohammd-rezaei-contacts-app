import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setContacts, setContact } from "../../actions/actions";
import { useContact } from "../../context/ContactContext";
import { v4 } from "uuid";
import styles from "./ContactForm.module.css";

import success from "/src/assets/check.png";
import leftArrow from "../../assets/left-arrow.png";
import userIcon from "../../assets/name.png";
import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone.png";

function contactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showToast } = useContact();
  const contact = useSelector((state) => state.contact.contact);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(
      setContact({
        ...contact,
        [name]: value,
        photo: `https://ui-avatars.com/api/?name=${contact.name[0]}&length=1&background=random&size=262`,
      })
    );
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => phone.length >= 10;

  const addHandler = async () => {
    const newErrors = {
      name: !contact.name ? "Name is required." : "",
      email:
        !contact.email || !validateEmail(contact.email)
          ? "Invalid email format."
          : "",
      phone:
        !contact.phone || !validatePhone(contact.phone)
          ? "Invalid phone number."
          : "",
    };
    setErrors(newErrors);
    try {
      if (Object.values(newErrors).every((error) => error === "")) {
        const newContact = { ...contact, id: v4() };

        if (contact.isEditing) {
          await axios.put(
            `http://localhost:3010/contacts/${contact.id}`,
            newContact
          );
          showToast("Contact Updated!", success);
        } else {
          await axios.post("http://localhost:3010/contacts", newContact);
          showToast("Contact added!", success);
        }
        const res = await axios.get("http://localhost:3010/contacts");
        dispatch(setContacts(res.data));
        dispatch(
          setContact({
            name: "",
            email: "",
            phone: "",
            photo: "",
          })
        );
        setErrors({
          name: "",
          email: "",
          phone: "",
        });
        navigate("/");
        return;
      }
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  const backBtnHandler = () => {
    navigate("/");
    dispatch(
      setContact({
        name: "",
        email: "",
        phone: "",
        photo: "",
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={leftArrow} alt="back" onClick={backBtnHandler} />

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
            <img
              src={
                field === "email"
                  ? emailIcon
                  : field === "phone"
                  ? phoneIcon
                  : userIcon
              }
              alt=""
            />
            <input
              type={
                field === "email"
                  ? "email"
                  : field === "phone"
                  ? "number"
                  : "text"
              }
              placeholder={field}
              name={field}
              value={contact[field]}
              onChange={changeHandler}
            />
            <span>{error && error}</span>
          </div>
        ))}
        <button onClick={addHandler}>
          {contact.isEditing ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
}

export default contactForm;
