//Modules
import React, { useState } from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./styles/GalleryPage.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Gallery from "../components/Gallery/Gallery"
import Modal from "../components/Layout/Modal/Modal"

const GalleryPage = () => {
  const [showModal, toggleModal] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [modalAltText, setModalAltText] = useState(null)

  return (
    <Layout>
      <SEO
        title="Sang Foundation : Gallery"
        description={
          "Welcome to the Sang Foundation. Join us in the fight against plastic waste and go plastic free! Check out some pictures from our latest events."
        }
        keywords={"plastic, environment, waste, ocean, protect, gallery"}
      />

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          modalImage={modalImage}
          modalAltText={modalAltText}
        />
      )}
      <Fade>
        <main className={styles.GalleryPage}>
          <Gallery
            setModalImage={setModalImage}
            toggleModal={toggleModal}
            setModalAltText={setModalAltText}
          />
        </main>
      </Fade>
    </Layout>
  )
}

export default GalleryPage
