//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Event.module.scss"

const Event = () => {
  const data = useStaticQuery(query)

  const flyer = data.allFile.edges[0].node.childImageSharp.fluid

  console.log(flyer)
  return (
    <Fade>
      <section className={styles.Event}>
        <Img
          fluid={flyer}
          alt="World Ocean's Day Event"
          className={styles.Flyer}
        />

        <h1>World Oceans Day Bangkok 2019</h1>

        <p>
          A public awareness family event celebrating World Oceans Day. Hosted
          by Sang Foundation & partners Precious Plastic, Grin Green
          International, Eco Beasts and Trash Hero.
        </p>
        <p>
          Featuring educational presentations, workshops, demos, documentary
          viewings, music, dancers, children's activites, food and beverages and
          a raffle!
        </p>
        <p className={styles.Underline}>
          Participation Fee: min 100 Baht suggested donation per person
        </p>

        <div className={styles.EventCTA}>
          <h2>Visit the Facebook event page to learn more</h2>
          <button>
            <a
              href="https://www.facebook.com/events/418916045594803/?active_tab=about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </button>
        </div>
      </section>
    </Fade>
  )
}

const query = graphql`
  {
    allFile(filter: { relativePath: { eq: "WODflyer-compressor.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Event
