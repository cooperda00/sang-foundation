//Modules
import React from "react"
import { Helmet } from "react-helmet"
import Fade from "react-reveal"
//Components
import Layout from "../components/Layout/Layout"
import Introduction from "../components/About/Introduction/Introduction"
import Personnel from "../components/About/Personnel/Personnel"
// import CTA from "../components/Layout/CTA/CTA"
//Sass
import styles from "./styles/AboutPage.module.scss"

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>Sang Foundation: About Us</title>
    </Helmet>
    <Fade duration={1000}>
      <main className={styles.AboutPage}>
        <Introduction />
        <Personnel />
        {/* <CTA cards={["contact", "volunteer"]} /> */}
      </main>
    </Fade>
  </Layout>
)

export default AboutPage
