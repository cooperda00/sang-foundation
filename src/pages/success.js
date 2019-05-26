//Modules
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
//Sass
import styles from "./styles/SuccessPage.module.scss"

const SuccessPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sang Foundation: Success</title>
      </Helmet>
      <section className={styles.Success}>
        <h1>Thanks for contacting us!</h1>
        <h2>
          Proceed <Link to="/">Home</Link>
        </h2>
      </section>
    </Layout>
  )
}

export default SuccessPage
