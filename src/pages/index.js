//Modules
import React, { useState } from "react"
//Components
import CTA from "../components/Layout/CTA/CTA"
import Event from "../components/Home/Event/Event"
import Events from "../components/Home/Events/Events"
import Layout from "../components/Layout/Layout"
import Modal from "../components/Layout/Modal/Modal"
import Partners from "../components/Home/Partners/Partners"
import SectionOne from "../components/Home/SectionOne/SectionOne"
import SEO from "../components/SEO/SEO"
import SplashAlt from "../components/Home/SplashAlt/SplashAlt"
import Facebook from "../components/Facebook/Facebook"
//Sass
import styles from "./styles/IndexPage.module.scss"

const IndexPage = () => {
  const [showModal, toggleModal] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [modalAltText, setModalAltText] = useState(null)

  return (
    <Layout>
      <SEO
        title="Sang Foundation : Home"
        description="Welcome to the Sang Foundation. Join us in the fight against plastic waste and go plastic free!"
        keywords={"plastic, environment, waste, ocean, protect"}
      />

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          modalImage={modalImage}
          modalAltText={modalAltText}
        />
      )}

      <main className={styles.Home}>
        <SplashAlt />

        <Events />

        <SectionOne
          setModalImage={setModalImage}
          toggleModal={toggleModal}
          setModalAltText={setModalAltText}
        />

        <Event />

        <CTA cards={["donate", "volunteer", "about", "contact"]} />

        <Facebook />

        <Partners />
      </main>
    </Layout>
  )
}

export default IndexPage
