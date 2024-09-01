import styles from "./Toast.module.css"
function Toast({ message, show ,icon }) {
    return (
      show && (
        <div className={`${styles.toast} ${show && styles.show}`}>
          <img src={icon} alt="" />
          {message}
        </div>
      )
    );
  }
  
  export default Toast;