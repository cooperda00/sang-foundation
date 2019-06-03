//Modules
import React, { useState } from "react"
import Fade from "react-reveal"
//Components
import Layout from "../components/Layout/Layout"
import Bobo from "../components/Programs/Bobo/Bobo"
import Core from "../components/Programs/Core/Core"
import Modal from "../components/Layout/Modal/Modal"
import SEO from "../components/SEO/SEO"
//Sass
import styles from "./styles/ProgramsPage.module.scss"

const ProgramsPage = () => {
  const [showModal, toggleModal] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [modalAltText, setModalAltText] = useState(null)

  return (
    <Layout>
      <SEO
        title="Sang Foundation: Our Programs"
        description={
          "Welcome to the Sang Foundation. Get information on what kind of programs we run at the Sang Foundation"
        }
        keywords={"plastic, environment, waste, ocean, protect, bobo"}
      />

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          modalImage={modalImage}
          modalAltText={modalAltText}
        />
      )}
      <Fade duration={1000}>
        <main className={styles.Programs}>
          <Core
            setModalImage={setModalImage}
            toggleModal={toggleModal}
            setModalAltText={setModalAltText}
          />
          <Bobo
            setModalImage={setModalImage}
            toggleModal={toggleModal}
            setModalAltText={setModalAltText}
          />
        </main>
      </Fade>
    </Layout>
  )
}

export default ProgramsPage
