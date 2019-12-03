//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Gallery.module.scss"

const Gallery = props => {
  const input = useStaticQuery(query)

  const data = input.allFile.edges.map(image => {
    return {
      image: image.node.childImageSharp.fluid,
      altText: image.node.name,
    }
  })

  return (
    <section className={styles.Gallery}>
      <h1 className={styles.Title}>Event Gallery</h1>
      <div className={styles.GalleryGrid}>
        {data.map((image, index) => {
          return (
            <div
              className={styles.Card}
              key={index}
              onClick={() => {
                const dataClone = [...data].filter(
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
    allFile(
      filter: { relativeDirectory: { eq: "WODgallery" } }
      sort: { fields: [birthtime], order: DESC }
    ) {
      edges {
        node {
          name
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

export default Gallery
