import styles from "./Toast.module.css"
function Toast({ message, show }) {
    return (
      show && (
        <div className={`${styles.toast} ${show && styles.show}`}>
          <img src="./src/assets/check.png" alt="" />
          {message}
        </div>
      )
    );
  }
  
  export default Toast;