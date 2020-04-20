//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./SectionOne.module.scss"

const SectionOne = props => {
  const imageData = useStaticQuery(query)

  const data = [
    {
      image: imageData.youth.childImageSharp.fluid,
      altText: "Students holding signs",
    },
    {
      image: imageData.bins.childImageSharp.fluid,
      altText: "Recycling station at the beach",
    },
    {
      image: imageData.cleanup.childImageSharp.fluid,
      altText: "Kids participating in a beach cleanup",
    },
    {
      image: imageData.group.childImageSharp.fluid,
      altText: "Group photo at a workshop",
    },
    {
      image: imageData.youth2.childImageSharp.fluid,
      altText: "Students participating in a workshop activity",
    },
    {
      image: imageData.bobo.childImageSharp.fluid,
      altText: "Bobo the whale",
    },
  ]

  return (
    <section className={styles.SectionOne}>
      <Fade>
        <div className={styles.Intro}>
          <h3>Our Mission and Vision</h3>
          <p>
            The Sang Foundation was created to raise public awareness that
            plastic waste is now at a critical level and more and more marine
            animals are painfully dying because of our addiction to plastic. We
            are here to spread the message that this does not need to happen -
            there are alternatives to plastic.
          </p>
          <p>
            Starting with our iconic 11-meter-long Bobo The Whale, made with
            metal structures and covered with denim, we raise awareness about
            our disastrous ocean debris situation in Thailand through school
            visites and events.
          </p>
          <p>
            Bobo the Whale visits schools during an environmental awareness
            month at the school with accompanied activities and lessons.
          </p>
          <p>
            Through these educational activities and workshops, we continue to
            encourage children to start a waste-free living style with their
            family members.
          </p>
        </div>
      </Fade>

      <Fade>
        <div className={styles.ImageGrid}>
          {data.map(card => {
            return (
              <div
                onClick={() => {
                  const dataClone = [...data].filter(
                    item => item.altText !== card.altText
                  )
                  const newArray = [card, ...dataClone]
                  props.setModalImage(newArray)
                  props.toggleModal(true)
                  props.setModalAltText(card.altText)
                }}
                key={card.altText}
              >
                <Img
                  fluid={card.image}
                  alt={card.altText}
                  className={styles.Image}
                />
              </div>
            )
          })}
        </div>
      </Fade>
    </section>
  )
}

const query = graphql`
  {
    youth: file(relativePath: { eq: "youth.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bins: file(relativePath: { eq: "cleanup2-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    cleanup: file(relativePath: { eq: "cleanup1-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    group: file(relativePath: { eq: "group-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    youth2: file(relativePath: { eq: "youth2-compressor.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bobo: file(relativePath: { eq: "bobo-compressor.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default SectionOne
