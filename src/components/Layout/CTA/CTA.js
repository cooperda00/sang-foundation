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
  const logo = data.logo.edges[0].node.childImageSharp.fluid

  return (
    <Fade left cascade duration={700}>
      <section className={styles.CTA}>
        {cards.includes("contact") && (
          <div className={styles.Card}>
            <Img fluid={bobo} alt="Mini Bobo" className={styles.Img} />
            <h3>Want to get in touch with us directly?</h3>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        )}

        {cards.includes("about") && (
          <div className={styles.Card}>
            <Img fluid={logo} alt="Our Logo" className={styles.Img} />
            <h3>Want to learn a bit more about who we are?</h3>
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
            <h3>Help us out by becoming a volunteer</h3>
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

        {cards.includes("donate") && (
          <div className={styles.Card}>
            <Img
              fluid={youth}
              alt="Students holding signs"
              className={styles.Img}
            />
            <h3>Support us in our continuing fight</h3>
            <button>
              <a
                href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=bb19fa2a41a21&mfid=1558582688970_bb19fa2a41a21#/checkout/openButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    volunteer: allFile(
      filter: { relativePath: { eq: "volunteer1-compressor.jpeg" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    logo: allFile(filter: { relativePath: { eq: "logo-old-compressor.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default CTA
