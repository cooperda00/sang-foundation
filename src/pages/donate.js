//Modules
import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./styles/DonatePage.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const DonatePage = ({ data }) => {
  const donate = data.donate.childImageSharp.fluid
  const CCCL = data.CCCL.childImageSharp.fixed

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
        <main className={styles.Donate}>
          <h1 className={styles.Title}>Donate</h1>

          <div className={styles.DonateImage}>
            <Img
              fluid={donate}
              alt="Mutsumi Adachi distributing supplies to those in need"
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
              <h2 className={styles.Subtitle}>How your money will help</h2>
              <p>
                The Sang Foundation is a Thai government registered and
                certified non profit organization. We have a tax ID issued by
                the minister of finance for tax redemption.
              </p>

              <p>
                Presently, your donation will go directly towards helping
                vulnerable people living in the slums of Hua Hin, Cha Am and
                Pranburi. We buy and prepare packages of rice, canned food,
                noodles, cooking oil and soap, one per family. We then deliver
                them to each slum and give the packages personally to make sure
                that no one goes hungry.
              </p>

              <p>
                Normally, your donation will go towards sponsoring and
                supporting the following organisations:
              </p>
            </div>

            <div className={styles.Organisations}>
              <div className={styles.Organisation}>
                <div className={styles.Left}>
                  <Img
                    fixed={CCCL}
                    alt="Changing Climate, Changing
                    Lives Logo"
                  />
                </div>
                <div className={styles.Right}>
                  <h3>Changing Climate, Changing Lives</h3>
                  <p>
                    The Sang Foundation supports the Changing Climate, Changing
                    Lives Film Festival through help with accounting and
                    administration. We work hand in hand to organise and operate
                    social events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fade>
    </Layout>
  )
}

export const query = graphql`
  {
    donate: file(relativePath: { eq: "solicit_donations.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    CCCL: file(relativePath: { eq: "CCCL2020.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

export default DonatePage
