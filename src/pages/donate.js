//Modules
import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { graphql } from "gatsby"
//Sass
import styles from "./styles/DonatePage.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
//Images
import bubble from "../images/speechbubble.png"

const DonatePage = ({ data }) => {
  const seal = data.seal.childImageSharp.fluid
  const grinGreen = data.grinGreen.childImageSharp.fixed
  const ecoBeasts = data.ecoBeasts.childImageSharp.fixed
  const trashHero = data.trashHero.childImageSharp.fixed
  const preciousPlastic = data.preciousPlastic.childImageSharp.fixed

  return (
    <Layout>
      <SEO
        title="Sang Foundation: Donate"
        description={
          "Welcome to the Sang Foundation. Donate now and help us in the fight against plastic waste and go plastic free! "
        }
        keywords={"plastic, environment, waste, ocean, protect, bobo, donate"}
      />
      <Fade>
        <section className={styles.Donate}>
          <h1 className={styles.Title}>Donate</h1>

          <div className={styles.DonateImage}>
            <div className={styles.BubbleContainer}>
              <div className={styles.Bubble}>
                <img src={bubble} alt="Speech Bubble" />
                <p>Thank You!</p>
              </div>
            </div>

            <Img
              fluid={seal}
              alt="A distressed seal tangled in ocean plastic"
              className={styles.Img}
            />
          </div>

          <div className={styles.DetailsAddress}>
            <div className={styles.Details}>
              <div>
                <p>
                  <strong>Account:</strong>
                </p>
                <p>016-2-97347-9</p>
              </div>

              <div>
                <p>
                  <strong>Name:</strong>
                </p>
                <p>Sang Foundation</p>
              </div>

              <div>
                <p>
                  <strong>Bank:</strong>
                </p>
                <p>Kasikorn</p>
              </div>

              <div>
                <p>
                  <strong> Bank Swift Code:</strong>
                </p>
                <p>KASITHBK</p>
              </div>

              <div>
                <p>
                  <strong>Tax Redemption ID:</strong>
                </p>
                <p>0-9930-00372-79-4</p>
              </div>
            </div>

            <div className={styles.Address}>
              <p>
                <strong>Official Address</strong>
              </p>
              <p>909 JC Tower</p>
              <p>Thonglor Soi 25</p>
              <p>Khlong Toei Nua</p>
              <p>Wattana 10110</p>
              <p>Bangkok</p>
            </div>
          </div>

          <div className={styles.Copy}>
            <div className={styles.Intro}>
              <h2>How your money will help</h2>
              <p>
                The Sang Foundation is a Thai government registered and
                certified non profit organization. We have a tax ID issued by
                the minister of finance for tax redemption. A suggested donation
                of <strong>฿100 - 500</strong> will go towards sponsoring and
                supporting the following organisations:
              </p>
            </div>

            <div className={styles.Organisations}>
              <div className={styles.Organisation}>
                <div className={styles.Left}>
                  <Img fixed={grinGreen} alt="Grin Green Logo" />
                </div>

                <div className={styles.Right}>
                  <h3>Grin Green International</h3>
                  <p>
                    A student centered social enterprise. We organize beach
                    cleanups and social events in different public places. The
                    Sang Foundation funds their merchandise, handles the
                    financial part of their transactions as well as organizes
                    all activities with them together as a group.
                  </p>
                </div>
              </div>

              <div className={styles.Organisation}>
                <div className={styles.Left}>
                  <Img fixed={preciousPlastic} alt="Precious Plastic Logo" />
                </div>
                <div className={styles.Right}>
                  <h3>Precious plastic </h3>
                  <p>
                    Precious Plastic create machines that turn waste plastic
                    into usable items. In the future we would like to reduce the
                    cost of these machine and produce more machines for schools
                    to use. We would also like to build an injection machine to
                    help local communities recycle their own plastic waste and
                    generate income by selling the created merchandise. The Sang
                    Foundation helps to organize events and direct action with
                    Precious Plastic to bring schools and communities together.
                  </p>
                </div>
              </div>

              <div className={styles.Organisation}>
                <div className={styles.Left}>
                  <Img fixed={ecoBeasts} alt="Eco Beasts" />
                </div>
                <div className={styles.Right}>
                  <h3>Eco Beasts</h3>
                  <p>
                    The Sang Foundation is creating a school curriculum together
                    with Eco Beasts to define how to build waste-free schools
                    with children and their parents. We also want to bring in
                    specialists in this domain to help us with information and
                    statistics, learning from other countries' sustainable
                    educational activities. The funds will go to creating this
                    curriculum for all schools, staring with international
                    schools in Thailand.
                  </p>
                </div>
              </div>

              <div className={styles.Organisation}>
                <div className={styles.Left}>
                  <Img fixed={trashHero} alt="Trash Hero Logo" />
                </div>
                <div className={styles.Right}>
                  <h3>Trash Hero Thailand </h3>
                  <p>
                    Together we organize different cleanup events, connect with
                    government municipalities and other parties to reduce waste
                    and use recycled materials. We also connect with other
                    sustainability projects such as growing mangroves, planting
                    trees and organizing student-led events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </Layout>
  )
}

export const query = graphql`
  {
    seal: file(relativePath: { eq: "seal-compressor.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    ecoBeasts: file(relativePath: { eq: "ecobeasts.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

    grinGreen: file(relativePath: { eq: "gringreen-compressor.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

    preciousPlastic: file(
      relativePath: { eq: "preciousplastic-compressor.png" }
    ) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

    trashHero: file(relativePath: { eq: "trashhero-compressor.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

export default DonatePage
