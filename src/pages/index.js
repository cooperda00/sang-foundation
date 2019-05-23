//Modules
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
//Sass
import styles from "./styles/IndexPage.module.scss"
//Images
import straws from "../images/nostraws.jpg"
import group from "../images/group.jpg"
import boat from "../images/onboat.jpg"
import bobo from "../images/bobo.png"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Sang Foundation : Home</title>
    </Helmet>

    <main className={styles.Home}>
      <h1>Welcome to the Sang Foundation</h1>
      <h3>We promote waste-free living</h3>
      <section className={styles.SectionOne}>
        <div className={styles.Intro}>
          <h3>Our Mission and Vision</h3>
          <p>
            Starting with our iconic 11-meter-long Bobo The Whale, made with
            metal structures and covered with denim, we raise awareness about
            our disastrous ocean debris situation in Thailand.
          </p>
          <p>
            Plus ringing alarm of the emergency for our global climate change.
          </p>
          <p>
            Through school educational activities and workshops, we continue to
            encourage children to start a waste-free living style with their
            family members.
          </p>
        </div>

        <div className={styles.ImageGrid}>
          <div>
            <img src={straws} alt="Say no to plastic straws" />
          </div>
          <div>
            <img src={group} alt="Team Effort" />
          </div>
          <div>
            <img src={boat} alt="No more plastic bottles" />
          </div>
          <div>
            <img src={bobo} alt="Bobo the whale" />
          </div>
        </div>
      </section>

      <section className={styles.CTAOne}>
        <div>
          <h3>Learn more about our foundation</h3>
          <Link to="/about">Learn More</Link>
        </div>

        <div>
          <h3>Start Acting Now!</h3>
          <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">Volunteer</a>
        </div>

        <div>
          <h3>Help us continue the fight</h3>
          <a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=bb19fa2a41a21&mfid=1558582688970_bb19fa2a41a21#/checkout/openButton">
            Donate
          </a>
        </div>
      </section>

      <section className={styles.Event}>
        <h1>World Oceans Day Bangkok 2019</h1>
        <p>
          A public awareness family event celebrating World Oceans Day. Hosted
          by Sang Foundation & partners Precious Plastic, Grin Green
          International, Eco Beasts and Trash Hero.
        </p>
        <p>
          Featuring educational presentations, workshops, demos, documentary
          viewings, music, dancers, children's activites, food and beverages and
          a raffle!
        </p>
        <p>Participation Fee: min 100 Baht suggested donation per person</p>

        <div>
          <h3>Visit the event page to learn more</h3>
          <a href="https://www.facebook.com/events/418916045594803/?active_tab=about">
            Learn More
          </a>
        </div>
      </section>

      <section className={styles.Partners}>
        <h1>Our Partners</h1>
        <div>Some stuff about partners goes here</div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
