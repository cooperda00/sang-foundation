//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./CCCL2020.module.scss"

const CCCL2020 = () => {
  const data = useStaticQuery(query)
  const flyer = data.flyer.childImageSharp.fluid

  return (
    <Fade>
      <section className={styles.Container}>
        <Image
          fluid={flyer}
          alt="CCCL 2020 Film Festival"
          className={styles.Flyer}
        />

        <h1>Changing Climate, Changing Lives 2020 Film Festival</h1>

        <p>
          The Sang Foundation will be supporting the Changing Climate, Changing
          Lives Film Festival in 2020. The CCCL Film Festival aims to be a
          platform to help support Thai communities by encouraging them to share
          their experiences of climate change impact and showcase Thai people’s
          efforts to unite and make positive change.
        </p>

        <p>
          CCCL is currently accepting short film applications for the festival.
          Never produced a short film before? Not sure whether your ideas are
          good or not? Need some help with funding your short film production?
          Send in your script and get a chance to win a 25,000THB grant! The
          deadline for grant proposals is 15 April 2020.
        </p>

        <div className={styles.VideoContainer}>
          <div className={styles.Video}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3qGRMCJeFAU"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Changing Climate, Changing Lives 2020"
            />
          </div>
        </div>

        <a
          href="https://www.climatefilmfestival2020.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.OutLink}
        >
          Find Out More
        </a>
      </section>
    </Fade>
  )
}

const query = graphql`
  {
    flyer: file(relativePath: { eq: "CCCL2020.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default CCCL2020
