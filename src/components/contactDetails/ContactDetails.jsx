import { Link, useParams } from "react-router-dom";
import { useContact } from "../../context/ContactContext";
import styles from "./ContactDetails.module.css";
import leftArrow from "../../assets/left-arrow.png";

function ContactDetails() {
  const { id } = useParams();
  const {contacts , editHandler} = useContact()

  const contact = contacts.find(c => c.id === id);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <Link to="/"> <img src={leftArrow} alt="back"  /></Link>
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
        <p>{contact.name}</p>
        <button onClick={(e) => editHandler(e, contact)}>Edit</button>
      
      </div>

      <div className={styles.phone}>
        <h4>Phone Number</h4>
        <p>{contact.phone}</p>
      </div>
    </div>
  );
}

export default ContactDetails;
