//Modules
import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./styles/Covid19Page.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Counter from "../components/Home/Events/COVID19/Counter/Counter"

const Covid19Page = ({ data }) => {
  const donation1 = data.donation1.childImageSharp.fluid
  const donation2 = data.donation2.childImageSharp.fluid
  const donation3 = data.donation3.childImageSharp.fluid
  const donation4 = data.donation4.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title="Sang Foundation: COVID-19"
        description={
          "Welcome to the Sang Foundation. COVID-19 Update: An plea for help to support those most affected by the lockdown."
        }
        keywords={"COVID-19, coronavirus, support, vulnerable, donate"}
      />
      <Fade>
        <main className={styles.Container}>
          <section className={styles.Section}>
            <h1>Urgent! Thailand Lockdown Charity Drive.</h1>

            <div className={styles.VideoContainer}>
              <div className={styles.Video}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TofDIAtxfNg"
                  frameborder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="Sang foundation aid for COVID-19"
                />
              </div>
            </div>

            <article className={styles.ContentContainer}>
              <div className={styles.ImagesContainer}>
                <div className={styles.ImageContainer}>
                  <Img fluid={donation4} className={styles.Image} />
                </div>
                <div className={styles.ImageContainer}>
                  <Img fluid={donation3} className={styles.Image} />
                </div>
                <div className={styles.ImageContainer}>
                  <Img fluid={donation1} className={styles.Image} />
                </div>

                <div className={styles.ImageContainer}>
                  <Img fluid={donation2} className={styles.Image} />
                </div>
              </div>
              <div className={styles.TextContainer}>
                <h2>
                  Help families economically affected the most by the COVID-19
                  Lockdown.
                </h2>
                <Counter />
                <p>
                  The beaches of Prachauap Kirikhan and Phetchaburi are usually
                  crowded with tourists and vendors of every kind. The fruit man
                  coming by to offer one a refreshing treat in the blazing heat,
                  the sarong sellers showing you their different prints and
                  designs, floats of all sizes and shapes available for you, and
                  massage ladies offering relaxation as one looks upon the sea.
                </p>
                <p>
                  These vendors along with the local seaside businesses such as
                  hotels, restaurants, bars, and massage parlours/spas that
                  allow for enchanted holidays in the “Land of Smiles” are
                  greatly suffering today due to the global COVID-19 crisis.
                  Many of them are left with stock of their merchandise without
                  any business and those in the service industry barely have any
                  work. Unable to provide for themselves and their families many
                  of them are going hungry. It is estimated that over a thousand
                  families are without sufficient food and daily supplies in
                  only these two provinces.
                </p>
                <p>
                  This is an urgent and critical matter, and your donation will
                  go directly to feeding and supporting these vulnerable
                  families during this difficult time.
                </p>
                <p>
                  Please find information for donating on our Donation page, or
                  email us for more information on how you money will be used at{" "}
                  <a href="mailto:info@sangfoundation.org">
                    info@sangfoundation.org
                  </a>
                  .
                </p>

                <Link to="/donate" className={styles.Link}>
                  Donate Now
                </Link>
              </div>
            </article>
          </section>
        </main>
      </Fade>
    </Layout>
  )
}

export const query = graphql`
  {
    donation1: file(relativePath: { eq: "donation_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    donation2: file(relativePath: { eq: "donation_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    donation3: file(relativePath: { eq: "donation_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    donation4: file(relativePath: { eq: "donation_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Covid19Page
