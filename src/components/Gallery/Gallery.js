//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Gallery.module.scss"

const Gallery = props => {
  const input = useStaticQuery(query)

  const WOD = input.WOD.edges.map(image => {
    return {
      image: image.node.childImageSharp.fluid,
      altText: image.node.name,
    }
  })

  const trashion = input.trashion.edges.map(image => {
    return {
      image: image.node.childImageSharp.fluid,
      altText: image.node.name,
    }
  })

  const covidAction = input.covidAction.edges.map(image => {
    return {
      image: image.node.childImageSharp.fluid,
      altText: image.node.name,
    }
  })

  return (
    <section className={styles.Gallery}>
      <h1 className={styles.Title}>COVID-19 Action</h1>
      <div className={styles.GalleryGrid}>
        {covidAction.map((image, index) => {
          return (
            <div
              className={styles.Card}
              key={index}
              onClick={() => {
                const dataClone = [...covidAction].filter(
                  item => item.altText !== image.altText
                )
                const newArray = [image, ...dataClone]

                props.setModalImage(newArray)
                props.toggleModal(true)
                props.setModalAltText(image.altText)
              }}
            >
              <Img
                fluid={image.image}
                alt={image.altText}
                className={styles.Image}
              />
            </div>
          )
        })}
      </div>
      <h1 className={styles.Title}>Trashion Is The New Fashion</h1>
      <div className={styles.GalleryGrid}>
        {trashion.map((image, index) => {
          return (
            <div
              className={styles.Card}
              key={index}
              onClick={() => {
                const dataClone = [...trashion].filter(
                  item => item.altText !== image.altText
                )
                const newArray = [image, ...dataClone]

                props.setModalImage(newArray)
                props.toggleModal(true)
                props.setModalAltText(image.altText)
              }}
            >
              <Img
                fluid={image.image}
                alt={image.altText}
                className={styles.Image}
              />
            </div>
          )
        })}
      </div>
      <h1 className={styles.Title}>World Ocean Day 2019</h1>
      <div className={styles.GalleryGrid}>
        {WOD.map((image, index) => {
          return (
            <div
              className={styles.Card}
              key={index}
              onClick={() => {
                const dataClone = [...WOD].filter(
                  item => item.altText !== image.altText
                )
                const newArray = [image, ...dataClone]

                props.setModalImage(newArray)
                props.toggleModal(true)
                props.setModalAltText(image.altText)
              }}
            >
              <Img
                fluid={image.image}
                alt={image.altText}
                className={styles.Image}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

const query = graphql`
  {
    WOD: allFile(
      filter: { relativeDirectory: { eq: "WODgallery" } }
      sort: { fields: [birthtime], order: DESC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }

    trashion: allFile(
      filter: { relativeDirectory: { eq: "trashion" } }
      sort: { fields: [birthtime], order: DESC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    covidAction: allFile(
      filter: { relativeDirectory: { eq: "COVIDaction" } }
      sort: { fields: [birthtime], order: DESC }
    ) {
      edges {
        node {
          name
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

export default Gallery
