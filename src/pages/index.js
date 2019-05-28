//Modules
import React, { useState } from "react"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
import Splash from "../components/Home/Splash/Splash"
import SectionOne from "../components/Home/SectionOne/SectionOne"
import CTA from "../components/Home/CTA/CTA"
import Event from "../components/Home/Event/Event"
import Partners from "../components/Home/Partners/Partners"
import Modal from "../components/Layout/Modal/Modal"
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
      </Helmet>

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          modalImage={modalImage}
          modalAltText={modalAltText}
        />
      )}

      <main className={styles.Home}>
        <Splash />
        <SectionOne
          setModalImage={setModalImage}
          toggleModal={toggleModal}
          setModalAltText={setModalAltText}
        />
        <CTA />
        <Event />
        <Partners />
      </main>
    </Layout>
  )
}

export default IndexPage
