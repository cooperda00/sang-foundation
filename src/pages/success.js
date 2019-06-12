//Modules
import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
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
      <Fade>
        <main className={styles.Success}>
          <h1>Thanks for getting in touch with us.</h1>
          <h1>We will do our best to get back to you as soon as we can!</h1>
          <p>
            Back <Link to="/">Home</Link>
          </p>
        </main>
      </Fade>
    </Layout>
  )
}

export default SuccessPage
