//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Core.module.scss"

const Core = props => {
  const input = useStaticQuery(query)

  const data = [
    {
      image: input.group.childImageSharp.fluid,
      altText: "A group of people at a workshop",
      copy:
        "We create curriculums for schools to follow to raise awareness. These curriculums are split into pre-school, ages 6-12, ages 12-18 and university level.",
      class: `${styles.One}`,
    },
    {
      image: input.mall.childImageSharp.fluid,
      altText: "Working with pubic places",
      copy:
        "We organize community activities with shopping malls and other public places.",
      class: `${styles.Two}`,
    },
    {
      image: input.beachCleanup.childImageSharp.fluid,
      altText: "Organising a beach cleanup",
      copy:
        "We organize beach clean-ups with village committees and local school students.",
      class: `${styles.Three}`,
    },
    {
      image: input.onStage.childImageSharp.fluid,
      altText: "A group of students presenting onstage",
      copy:
        " We organize events in cultural centers to encourage companies and government establishments to go plastic free.",
      class: `${styles.Four}`,
    },
  ]

  return (
    <section className={styles.CoreProgram}>
      <h1>Our Core Programs</h1>
      <ul className={styles.CoreList}>
        {data.map(card => {
          console.log(card.image)
          return (
            <li className={card.class} key={card.altText}>
              <div
                onClick={() => {
                  props.setModalImage(card.image)
                  props.toggleModal(true)

                  const dataClone = [...data].filter(
                    item => item.altText !== card.altText
                  )
                  const newArray = [card, ...dataClone]
                  props.setModalImage(newArray)
                }}
              >
                <Img
                  fluid={card.image}
                  alt={card.altText}
                  className={styles.Image}
                />
              </div>

              <p>{card.copy}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const query = graphql`
  {
    group: file(relativePath: { eq: "group-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mall: file(
      relativePath: { eq: "WODgallery/a birds eye view of some stalls.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    beachCleanup: file(relativePath: { eq: "beachcleanup-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    onStage: file(relativePath: { eq: "onstage-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Core
