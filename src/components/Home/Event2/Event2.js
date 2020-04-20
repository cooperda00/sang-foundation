//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Event2.module.scss"

const Event2 = () => {
  const data = useStaticQuery(query)

  const flyer1 = data.flyer1.childImageSharp.fluid
  const flyer2 = data.flyer2.childImageSharp.fluid
  const flyer3 = data.flyer3.childImageSharp.fluid

  console.log(flyer1, flyer2, flyer3)

  return (
    <Fade>
      <section className={styles.Event2}>
        <div className={styles.ImageContainer}>
          <h1>Join the Global Climate Strike!</h1>
          <Img
            fluid={flyer1}
            alt="Global Climate Strike Bangkok"
            className={styles.Flyer}
          />
        </div>

        <div className={styles.ImageContainer}>
          <Img
            fluid={flyer3}
            alt="Global Climate Strike Bangkok"
            className={styles.Flyer}
          />
        </div>

        <div className={styles.ImageContainer}>
          <Img
            fluid={flyer2}
            alt="Global Climate Strike Chiang Mai"
            className={styles.Flyer}
          />
        </div>
      </section>
    </Fade>
  )
}

const query = graphql`
  {
    flyer1: file(relativePath: { eq: "strike1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    flyer2: file(relativePath: { eq: "strike2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    flyer3: file(relativePath: { eq: "strike3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Event2
