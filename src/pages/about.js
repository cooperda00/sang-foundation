//Modules
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
//Sass
import styles from "./styles/AboutPage.module.scss"
//Images
import logo from "../images/logo-old.png"
import mutsumi from "../images/mutsumi.png"
import caroline from "../images/caroline.png"

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>Sang Foundation: About Us</title>
    </Helmet>
    <main className={styles.AboutPage}>
      <h1>About us:</h1>

      <section className={styles.Introduction}>
        <h1>About Us</h1>
        <h2>Sang means light in Sanskrit and in Thai.</h2>
        <p>
          In the quest of cleaner and greener globe, crystal clear ocean, “Sang”
          literally is translated as the “light” in Thai will continue to ignite
          the creation of love and care for our beloved mother earth for the
          generations to come.
        </p>
      </section>

      <section className={styles.Logo}>
        <div>
          <img src={logo} alt="Sang Foundation Logo" />
          <h1>What does the Sang foundation logo mean?</h1>
          <p>
            The Sang foundation logo is designed with 20 beams of light
            surrounding the word Sang designed in Sanskrit styled letters.
          </p>
        </div>
      </section>

      <section className={styles.Personelle}>
        <div className={styles.Profile}>
          <img src={mutsumi} alt="Mutsumi Adachi" />
          <div>
            <h2>Mutsumi Adachi</h2>
            <p>
              Mutsumi is the managing partner of Omroom, an alternative healing
              center promoting holistic health and self-awareness. As an online
              platform, Omroom offers workshops and courses focusing on yoga,
              meditation, memory therapy, reiki, Bodytalk, hypnosis and
              Shamanism. Mutsumi travels around the world to offer her memory
              therapy sessions, and teaches students how to open their intuitive
              mind to live in a holistic holographic reality.
            </p>
            <p>test@test.com</p>
            <p>0854671234</p>
          </div>
        </div>

        <div className={styles.Profile}>
          <img src={caroline} alt="Caroline Link" />
          <div>
            <h2>Caroline Link</h2>
            <p>
              Ms. Caroline Link is the daughter of Harald and Assunta Link. Her
              father is the chairman of B. Grimm, one of Thailand’s oldest
              business institutions, with a 139-year-old tradition of “doing
              business with compassion.” Well-groomed to be the
              fourth-generation successor, Caroline has several roles within B.
              Grimm. She serves as a board member for B. Grimm Power, B. Grimm
              Carrier Thailand, and Merck Thailand. She manages corporate
              communications and public relations strategy for B. Grimm Power.
              She is also responsible for B. Grimm Social Engagement strategy.
              Caroline shares her family’s long-time love for philanthropic
              work, and actively engages in various programs and projects, both
              personal and via B. Grimm. Areas close to her heart are education,
              environmentalism, and culture. At present, B. Grimm is a
              multi-business corporation active in the energy, construction and
              industrial systems, healthcare, lifestyle, transport, and real
              estate sectors.
            </p>
            <p>test@test.com</p>
            <p>0854671234</p>
          </div>
        </div>
      </section>

      <section className={styles.CTA}>
        <div>
          <h3>Get in touch with us</h3>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Start acting now!</h3>
          <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">Volunteer</a>
        </div>
      </section>
    </main>
  </Layout>
)

export default AboutPage
