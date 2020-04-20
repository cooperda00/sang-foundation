//Modules
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./CTA.module.scss"

const CTA = ({ cards }) => {
  const data = useStaticQuery(query)

  const bobo = data.bobo.edges[0].node.childImageSharp.fluid
  const youth = data.youth.edges[0].node.childImageSharp.fluid
  const volunteer = data.volunteer.edges[0].node.childImageSharp.fluid
  const beach = data.beach.edges[0].node.childImageSharp.fluid

  return (
    <Fade left cascade duration={700}>
      <section className={styles.CTA}>
        {cards.includes("donate") && (
          <div className={styles.Card}>
            <Img
              fluid={youth}
              alt="Students holding signs"
              className={styles.Img}
            />
            <h3>Support our continuing fight</h3>
            <button>
              <Link to="/donate">Donate</Link>
            </button>
          </div>
        )}

        {cards.includes("contact") && (
          <div className={styles.Card}>
            <Img fluid={bobo} alt="Mini Bobo" className={styles.Img} />
            <h3>Get in touch with us</h3>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        )}

        {cards.includes("about") && (
          <div className={styles.Card}>
            <Img
              fluid={beach}
              alt="Volunteers at the beach cleanup"
              className={styles.Img}
            />
            <h3>Learn more about us</h3>
            <button>
              <Link to="/about">About</Link>
            </button>
          </div>
        )}

        {cards.includes("volunteer") && (
          <div className={styles.Card}>
            <Img
              fluid={volunteer}
              alt="Some of our volunteers"
              className={styles.Img}
            />
            <h3>Become a volunteer</h3>
            <button>
              <a
                href="https://forms.gle/RwXXjtwhkYSy4tWg8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
            </button>
          </div>
        )}
      </section>
    </Fade>
  )
}

const query = graphql`
  {
    youth: allFile(filter: { relativePath: { eq: "youth-compressor.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    volunteer: allFile(
      filter: { relativePath: { eq: "volunteer1-compressor.jpg" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }

    beach: allFile(
      filter: { relativePath: { eq: "volunteersbeach-compressor.jpg" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    bobo: allFile(filter: { relativePath: { eq: "minibobo-compressor.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default CTA
