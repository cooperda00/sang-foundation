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
      image: input.bobo.childImageSharp.fluid,
      altText: "bobo the whale at the WOD event",
      copy:
        "We have a program with our mascot Bobo The Whale who tours schools around Bangkok promoting environmental awareness and education for a period of time.",
      class: `${styles.One}`,
    },
    {
      image: input.mall.childImageSharp.fluid,
      altText: "Stalls at our recent WOD event",
      copy:
        "We bring attention of our Earth's issues by raising awareness at events like school fairs and farmer's markets.",
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
        "We help organize rallies and protests to encourage companies and schools to go plastic-free and also to appeal to the government to ban single-use plastics immediately.",
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
    bobo: file(relativePath: { eq: "WODgallery/bobo the whale.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Core
