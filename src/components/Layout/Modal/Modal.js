//Modules
import React, { useState, useEffect, useRef } from "react"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
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

  console.log(selectedImage)

  return (
    <div
      className={styles.Modal}
      ref={modalRef}
      tabIndex="0"
      onKeyDown={e => {
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
      <Fade duration={500}>
        <div className={styles.Content}>
          <button
            className={styles.CloseModal}
            onClick={() => {
              props.toggleModal(false)
            }}
          >
            X
          </button>

          {selectedImage.image && (
            <div className={styles.ImageContainer}>
              <Img
                fluid={selectedImage.image}
                alt={selectedImage.altText}
                className={styles.Image}
              />
            </div>
          )}
          {/* <img src={selectedImage.image} alt={selectedImage.altText} /> */}

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
      </Fade>
    </div>
  )
}

export default Modal
