//Modules
import React from "react"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
import Introduction from "../components/About/Introduction/Introduction"
import Personnel from "../components/About/Personnel/Personnel"
import CTA from "../components/About/CTA/CTA"
//Sass
import styles from "./styles/AboutPage.module.scss"

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>Sang Foundation: About Us</title>
    </Helmet>
    <main className={styles.AboutPage}>
      <h1>About Us:</h1>
      <Introduction />
      <Personnel />
      <CTA />
    </main>
  </Layout>
)

export default AboutPage
