//Modules
import React, { useState, useEffect, useRef } from "react"
//Sass
import styles from "./Modal.module.scss"
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const Modal = props => {
  const [selectedImage, updateSelectedImage] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const modalRef = useRef()

  useEffect(() => {
    updateSelectedImage(props.modalImage[currentIndex])
    modalRef.current.focus()
  }, [])

  const handleDecrement = () => {
    if (currentIndex === 0) {
      console.log("att the bottom")
      updateSelectedImage(props.modalImage[props.modalImage.length - 1])
      setCurrentIndex(props.modalImage.length - 1)
    } else {
      updateSelectedImage(props.modalImage[currentIndex - 1])
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleIncrement = () => {
    if (currentIndex === props.modalImage.length - 1) {
      updateSelectedImage(props.modalImage[0])
      setCurrentIndex(0)
    } else {
      updateSelectedImage(props.modalImage[currentIndex + 1])
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div
      className={styles.Modal}
      ref={modalRef}
      tabIndex="0"
      onKeyDown={e => {
        console.log(e.keyCode)
        if (e.keyCode === 39) {
          handleIncrement()
        }
        if (e.keyCode === 37) {
          handleDecrement()
        }
        if (e.keyCode === 27) {
          props.toggleModal(false)
        }
      }}
    >
      <div className={styles.Content}>
        <button
          className={styles.CloseModal}
          onClick={() => {
            props.toggleModal(false)
          }}
        >
          X
        </button>

        <img src={selectedImage.image} alt={selectedImage.altText} />

        <p className={styles.Description}>{selectedImage.altText}</p>

        <button
          onClick={handleDecrement}
          className={`${styles.Arrow} ${styles.ArrowLeft}`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={handleIncrement}
          className={`${styles.Arrow} ${styles.ArrowRight}`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default Modal
