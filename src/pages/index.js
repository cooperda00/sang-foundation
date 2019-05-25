//Modules
import React from "react"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
import Splash from "../components/Home/Splash/Splash"
import SectionOne from "../components/Home/SectionOne/SectionOne"
import CTA from "../components/Home/CTA/CTA"
import Event from "../components/Home/Event/Event"
import Partners from "../components/Home/Partners/Partners"
//Sass
import styles from "./styles/IndexPage.module.scss"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Sang Foundation : Home</title>
    </Helmet>

    <main className={styles.Home}>
      <Splash />
      <SectionOne />
      <CTA />
      <Event />
      <Partners />
    </main>
  </Layout>
)

export default IndexPage
