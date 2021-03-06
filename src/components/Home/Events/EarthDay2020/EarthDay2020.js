//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./EarthDay2020.module.scss"

const EarthDay2020 = () => {
  const data = useStaticQuery(query)
  const flyer = data.flyer.childImageSharp.fluid

  return (
    <Fade>
      <section className={styles.Container}>
        <Image
          fluid={flyer}
          alt="Earth Day at Patom"
          className={styles.Flyer}
        />

        <h1>Earth Day 2020</h1>

        <p>
          The Sang Foundation will be partnering with Patom on the 25th April to
          bring you an event for Earth Day 2020. Please stay tuned for more
          info.
        </p>

        <a
          href="https://www.facebook.com/patom.organics/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.OutLink}
        >
          Find Out More
        </a>
      </section>
    </Fade>
  )
}

const query = graphql`
  {
    flyer: file(relativePath: { eq: "patom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default EarthDay2020
