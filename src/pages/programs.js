//Modules
import React from "react"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
import Bobo from "../components/Programs/Bobo/Bobo"
import CTA from "../components/Programs/CTA/CTA"
import Core from "../components/Programs/Core/Core"
//Sass
import styles from "./styles/ProgramsPage.module.scss"

const ProgramsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sang Foundation: Our Programs</title>
      </Helmet>

      <main className={styles.Programs}>
        <Core />
        <CTA />
        <Bobo />
      </main>
    </Layout>
  )
}

export default ProgramsPage
