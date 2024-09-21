import React from 'react'
import styles from "./NotFound.module.css"
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className={styles.container}>
        <img src="./src/assets/404.png" width="600" alt="" />
        <Link to="/">Go Home</Link>
    </div>
  )
}

export default NotFoundPage