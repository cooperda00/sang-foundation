//Modules
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Fade from "react-reveal"
//Components
import CTA from "../components/Layout/CTA/CTA"
import Event from "../components/Home/Event/Event"
import Layout from "../components/Layout/Layout"
import Modal from "../components/Layout/Modal/Modal"
import Partners from "../components/Home/Partners/Partners"
import SectionOne from "../components/Home/SectionOne/SectionOne"
import Splash from "../components/Home/Splash/Splash"
//Sass
import styles from "./styles/IndexPage.module.scss"

const IndexPage = () => {
  const [showModal, toggleModal] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [modalAltText, setModalAltText] = useState(null)

  return (
    <Layout>
      <Helmet>
        <title>Sang Foundation : Home</title>
        <meta
          name="description"
          content="Welcome to the Sang Foundation. Join us in the fight against plastic waste and go plastic free!"
        />
      </Helmet>

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          modalImage={modalImage}
          modalAltText={modalAltText}
        />
      )}
      <Fade duration={1000}>
        <main className={styles.Home}>
          <Splash />
          <Event />

          <SectionOne
            setModalImage={setModalImage}
            toggleModal={toggleModal}
            setModalAltText={setModalAltText}
          />
          <CTA cards={["donate", "volunteer", "about", "contact"]} />

          <Partners />
        </main>
      </Fade>
    </Layout>
  )
}

export default IndexPage
