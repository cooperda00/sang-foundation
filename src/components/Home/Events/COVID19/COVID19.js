//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./COVID19.module.scss"

const COVID19 = () => {
  const data = useStaticQuery(query)
  const image = data.teamImage.childImageSharp.fluid

  return (
    <section className={styles.Container}>
      <Image
        fluid={image}
        alt="COVID-19 Fod Bank Team"
        className={styles.Flyer}
      />

      <h1>
        Urgent Action Needed! Help those economically affected by the COVID-19
        Pandemic.
      </h1>

      <p>
        The Sang Foundation is currently operating food deliveries to the
        elderly and others affected by the decimation of the tourism industry in
        Prachauap Kirikhan and Phetchaburi.
      </p>

      <p>
        It is estimated that over a thousand families are without sufficient
        food and daily supplies in these two provinces alone. Your donation will
        go directly to feeding and supporting these vulnerable families during
        this difficult time.
      </p>

      <div className={styles.ButtonsContainer}>
        <Link to="/covid19" className={styles.OutLink}>
          Find Out More
        </Link>

        <Link to="/donate" className={styles.OutLink}>
          Donate Now
        </Link>
      </div>
    </section>
  )
}

const query = graphql`
  {
    teamImage: file(relativePath: { eq: "food_team.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default COVID19
