//Modules
import React from "react"
import Fade from "react-reveal/Fade"
//Components
import Layout from "../components/Layout/Layout"
import Introduction from "../components/About/Introduction/Introduction"
import Personnel from "../components/About/Personnel/Personnel"
import SEO from "../components/SEO/SEO"
//Sass
import styles from "./styles/AboutPage.module.scss"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sang Foundation : About Us"
      description={
        "Welcome to the Sang Foundation. Learn more about the people behind the founation."
      }
      keywords={
        "plastic, environment, waste, ocean, protect, Mutsumi Adachi, Caroline Link"
      }
    />

    <Fade>
      <main className={styles.AboutPage}>
        <Introduction />
        <Personnel />
      </main>
    </Fade>
  </Layout>
)

export default AboutPage
