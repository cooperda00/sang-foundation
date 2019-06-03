//Modules
import React from "react"
import { Link } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
//Sass
import styles from "./styles/SuccessPage.module.scss"

const SuccessPage = () => {
  return (
    <Layout>
      <SEO
        title="Sang Foundation: Success"
        description={
          "Welcome to the Sang Foundation. Join us in the fight against plastic waste and go plastic free!"
        }
        keywords={"plastic, environment, waste, ocean, protect, bobo"}
      />
      <section className={styles.Success}>
        <h1>Thanks for getting in touch with us.</h1>
        <h1>We will to our best to get back to you as soon as we can!</h1>
        <p>
          Back <Link to="/">Home</Link>
        </p>
      </section>
    </Layout>
  )
}

export default SuccessPage
