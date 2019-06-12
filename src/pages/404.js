//Modules
import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
//Componets
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
//Sass
import styles from "./styles/NotFoundPage.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Sang Foundation: Page Not Found"
      description={
        "Welcome to the Sang Foundation. Join us in the fight against plastic waste and go plastic free!"
      }
      keywords={"plastic, environment, waste, ocean, protect, bobo"}
    />
    <Fade>
      <main className={styles.NotFound}>
        <h1>Ooops, Page Not Found</h1>
        <p>
          You might have made a mistake, head <Link to="/">Home</Link> and try
          again.
        </p>
      </main>
    </Fade>
  </Layout>
)

export default NotFoundPage
