//Modules
import React, { useState } from "react"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
import Bobo from "../components/Programs/Bobo/Bobo"
import CTA from "../components/Layout/CTA/CTA"
import Core from "../components/Programs/Core/Core"
import Modal from "../components/Layout/Modal/Modal"
//Sass
import styles from "./styles/ProgramsPage.module.scss"

const ProgramsPage = () => {
  const [showModal, toggleModal] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [modalAltText, setModalAltText] = useState(null)

  return (
    <Layout>
      <Helmet>
        <title>Sang Foundation: Our Programs</title>
      </Helmet>

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          modalImage={modalImage}
          modalAltText={modalAltText}
        />
      )}

      <main className={styles.Programs}>
        <Bobo
          setModalImage={setModalImage}
          toggleModal={toggleModal}
          setModalAltText={setModalAltText}
        />

        <CTA cards={["contact", "volunteer"]} />

        <Core
          setModalImage={setModalImage}
          toggleModal={toggleModal}
          setModalAltText={setModalAltText}
        />
      </main>
    </Layout>
  )
}

export default ProgramsPage
