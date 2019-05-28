//Modules
import React from "react"
//Sass
import styles from "./Modal.module.scss"

const Modal = props => {
  return (
    <div
      className={styles.Modal}
      onClick={() => {
        props.toggleModal(false)
      }}
    >
      <div className={styles.Content}>
        <img src={props.modalImage} alt={props.modalAltText} />
        <p>{props.modalAltText}</p>
      </div>
    </div>
  )
}

export default Modal
