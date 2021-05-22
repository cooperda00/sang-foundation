//Modules
import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
//Sass
import styles from "./styles/DonatePage.module.scss"
import outsideStyles from "./styles/Covid19Page.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
//Icons
import Paypal from "../images/paypal.inline.svg"

const DonatePage = ({ data }) => {
  const mutsumiDelivering = data.mutsumiDelivering.childImageSharp.fluid
  const volunteerTeam = data.volunteerTeam.childImageSharp.fluid
  const sideImage1 = data.sideImage1.childImageSharp.fluid
  const sideImage2 = data.sideImage2.childImageSharp.fluid
  const sideImage3 = data.sideImage3.childImageSharp.fluid
  const sideImage4 = data.sideImage4.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title="Sang Foundation: Donate"
        description={
          "Welcome to the Sang Foundation. Donate now and help us in the fight against plastic waste and go plastic free! "
        }
        keywords={
          "plastic, environment, waste, ocean, protect, bobo, donate, COVID, "
        }
      />

      <main className={styles.Donate}>
        <h1 className={styles.Title}>Donate</h1>

        <div className={styles.DonateImage}>
          <Img
            fluid={volunteerTeam}
            alt="The Sang Foundation Volunteering Team"
            className={styles.Img}
          />

          <Img
            fluid={mutsumiDelivering}
            alt="Mutsumi Adachi distributing supplies to those in need"
            className={styles.Img}
          />
        </div>

        <article className={outsideStyles.ContentContainer}>
          <div className={outsideStyles.ImagesContainer}>
            <div className={outsideStyles.ImageContainer}>
              <Img fluid={sideImage1} className={outsideStyles.Image} />
            </div>

            <div className={outsideStyles.ImageContainer}>
              <Img fluid={sideImage2} className={outsideStyles.Image} />
            </div>

            <div className={outsideStyles.ImageContainer}>
              <Img fluid={sideImage3} className={outsideStyles.Image} />
            </div>

            <div className={outsideStyles.ImageContainer}>
              <Img fluid={sideImage4} className={outsideStyles.Image} />
            </div>
          </div>

          <div className={outsideStyles.TextContainer}>
            <h2>
              Fundraising Effort To Provide Hunger Relief For The People Of Hua
              Hin
            </h2>

            <p>
              The Sang Foundation has launched a fundraising campaign to help
              people severely affected by COVID 19 in Hua Hin. Since April 2020,
              The Sang Foundation has delivered food packages, sponsored
              students to return to school and provided medicine for disabled
              patients. In total, the Sang Foundation has donated to 40,000+
              families. The organization is persisting in supporting those in
              need.
            </p>

            <p>
              The third COVID wave has hit local businesses heavily. In Hua Hin
              and Cha-Am, many people who work in tourism lost their jobs and
              urgently need support to feed their families. These include
              hotels, restaurants, bars, golf clubs, spas, transportation, tours
              and many other tourist focused businesses.
            </p>

            <p>
              The Sang Foundation is now raising ฿300,000 to provide food for
              workers from the hospitality industry who were laid off. This
              money will be used as follows.
            </p>

            <ul className={styles.List}>
              <li>
                <p>
                  The budget is ฿30 a meal, and the Sang Foundation produces 300
                  meals a week.
                </p>
              </li>

              <li>
                <p>
                  Drinks, gasoline, and other miscellaneous costs is ฿10,000 per
                  week.
                </p>
              </li>

              <li>
                <p>
                  The current round of fundraising will cover 30 weeks or the
                  equivalent of 6 months.
                </p>
              </li>
            </ul>

            <p>
              The Sang Foundation is a Thai government registered and certified
              non profit organization. We have a tax ID issued by the minister
              of finance for tax redemption.
            </p>
          </div>
        </article>

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

        <div className={styles.Paypal}>
          <Paypal />

          <p>
            Please make PayPal donations to <span>info@sangfoundation.org</span>
          </p>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    sideImage1: file(relativePath: { eq: "example_meal_1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    sideImage2: file(relativePath: { eq: "food_in_truck.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    sideImage3: file(relativePath: { eq: "food_package_1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    sideImage4: file(relativePath: { eq: "kids_lining_up.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    mutsumiDelivering: file(relativePath: { eq: "solicit_donations.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    volunteerTeam: file(relativePath: { eq: "volunteering_team.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default DonatePage
