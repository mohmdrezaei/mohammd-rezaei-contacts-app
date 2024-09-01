import styles from './Modal.module.css'

const Modal = ({ show, onClose, onConfirm }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
            <div className={styles.modalContent}>
            <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete the contact?</p>
          <button className={styles.cancel} onClick={onClose}>Cancel</button>
          <button className={styles.delete} onClick={onConfirm}>Delete</button>
            </div>
          
        </div>
      </div>
    );
  };
  
  export default Modal;