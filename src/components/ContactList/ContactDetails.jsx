import styles from "./ContactDetails.module.css";
function ContactDetails({ contact, routeHandler, editHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="./src/assets/left-arrow.png" onClick={routeHandler} />
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
