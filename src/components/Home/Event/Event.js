//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql, Link } from "gatsby"
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

        <h1>World Oceans Day June 8th 2019</h1>

        <p>
          A public awareness family event celebrating World Oceans Day. Hosted
          by Sang Foundation & partners Precious Plastic, Grin Green
          International, Eco Beasts, Trash Hero, Baht By Baht and Bye Bye
          Plastic Bags.
        </p>

        <p>
          We featured educational presentations, workshops, demos, documentary
          viewings, music, dancers, children's activities, food and beverages
          and a raffle!
        </p>

        <p className={styles.Underline}>
          Our event was a roaring success! Stay tuned for information about
          upcoming events.
        </p>

        <div className={styles.VideoContainer}>
          <div className={styles.Video}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EQTswS4rgNk"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="World Oceans Day Event Video"
            />
          </div>
        </div>

        <div className={styles.EventCTA}>
          <h2>Visit the Gallery to see what we got up to</h2>
          <button>
            <Link to="/gallery">Gallery</Link>
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
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default Event
