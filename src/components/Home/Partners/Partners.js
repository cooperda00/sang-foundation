//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Partners.module.scss"

const Partners = () => {
  const data = useStaticQuery(query)

  const bahtByBaht = data.bahtByBaht.edges[0].node.childImageSharp.fixed
  const ecoBeasts = data.ecoBeasts.edges[0].node.childImageSharp.fixed
  const grinGreen = data.grinGreen.edges[0].node.childImageSharp.fixed
  const preciousPlastic =
    data.preciousPlastic.edges[0].node.childImageSharp.fixed
  const trashHero = data.trashHero.edges[0].node.childImageSharp.fixed
  const BBBPB = data.bangkokByeBye.edges[0].node.childImageSharp.fixed

  return (
    <Fade>
      <section className={styles.Partners}>
        <h1>Our Partners</h1>
        <div className={styles.PartnerContainer}>
          <a
            href="https://www.bahtbybaht.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.Partner}>
              <Img
                fixed={bahtByBaht}
                alt="Baht By Baht"
                className={styles.Img}
              />

              <h2>Baht by Baht</h2>
            </div>
          </a>

          <a
            href="https://ecobeastsbkk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.Partner}>
              <div className={styles.ImageContainer}>
                <Img
                  fixed={ecoBeasts}
                  alt="Eco Beasts"
                  className={styles.Img}
                />
              </div>
              <h2>Eco Beasts</h2>
            </div>
          </a>

          <a
            href="https://gringreen.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.Partner}>
              <Img
                fixed={grinGreen}
                alt="Grin Green International"
                className={styles.Img}
              />
              <h2>Grin Green International</h2>
            </div>
          </a>

          <a
            href="https://preciousplastic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.Partner}>
              <Img
                fixed={preciousPlastic}
                alt="Precious Plastic"
                className={styles.Img}
              />
              <h2>Precious Plastic</h2>
            </div>
          </a>

          <a
            href=" https://trashhero.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.Partner}>
              <Img fixed={trashHero} alt="Trash Hero" className={styles.Img} />

              <h2>Trash Hero Bangkok</h2>
            </div>
          </a>

          <a
            href="http://www.byebyeplasticbags.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.Partner}>
              <Img
                fixed={BBBPB}
                alt="Bangkok Bye Bye Plastic Bags"
                className={styles.Img}
              />

              <h2>Bangkok Bye Bye Plastic Bags</h2>
            </div>
          </a>
        </div>
      </section>
    </Fade>
  )
}

const query = graphql`
  {
    bahtByBaht: allFile(
      filter: { relativePath: { eq: "bahtbybaht-compressor.png" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 280) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }

    ecoBeasts: allFile(filter: { relativePath: { eq: "ecobeasts.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 280) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }

    grinGreen: allFile(
      filter: { relativePath: { eq: "gringreen-compressor.png" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 280) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }

    preciousPlastic: allFile(
      filter: { relativePath: { eq: "preciousplastic-compressor.png" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 280) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }

    trashHero: allFile(
      filter: { relativePath: { eq: "trashhero-compressor.png" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 280) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    bangkokByeBye: allFile(
      filter: { relativePath: { eq: "bangkokbyebye.jpg" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 280) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Partners
