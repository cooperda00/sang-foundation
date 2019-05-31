//Modules
import React from "react"
//Sass
import styles from "./Personnel.module.scss"
//Images
import mutsumi from "../../../images/mutsumi-compressor.png"
import caroline from "../../../images/caroline-compressor.png"
import victoria from "../../../images/victoria-compressor.jpg"
import sandy from "../../../images/sandy-compressor.jpg"

const Personnel = () => {
  return (
    <section className={styles.Personnel}>
      <h2>Founders:</h2>

      <div className={styles.Founders}>
        <div className={styles.Profile}>
          <div className={styles.ImageName}>
            <img src={mutsumi} alt="Mutsumi Adachi" />
            <h3>Mutsumi Adachi</h3>
          </div>

          <div className={styles.Copy}>
            <p>
              Mutsumi is the managing partner of Omroom, an alternative healing
              center promoting holistic health and self-awareness. As an online
              platform, Omroom offers workshops and courses focusing on yoga,
              meditation, memory therapy, reiki, Bodytalk, hypnosis and
              Shamanism.
            </p>
            <p>
              Mutsumi travels around the world to offer her memory therapy
              sessions, and teaches students how to open their intuitive mind to
              live in a holistic holographic reality.
            </p>
          </div>
        </div>

        <div className={styles.Profile}>
          <div className={styles.ImageName}>
            <img src={caroline} alt="Caroline Link" />
            <h3>Caroline Link</h3>
          </div>

          <div className={styles.Copy}>
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
            </p>
            <p>
              Caroline shares her family’s long-time love for philanthropic
              work, and actively engages in various programs and projects, both
              personal and via B. Grimm. Areas close to her heart are education,
              environmentalism, and culture. At present, B. Grimm is a
              multi-business corporation active in the energy, construction and
              industrial systems, healthcare, lifestyle, transport, and real
              estate sectors.
            </p>
          </div>
        </div>
      </div>

      <h2 className={styles.Title}>Volunteers:</h2>

      <div className={styles.Profile}>
        <div className={styles.ImageName}>
          <img src={victoria} alt="Victoria" />
          <h3>Victoria</h3>
        </div>

        <div className={styles.Copy}>
          <p>
            I have been trying to live a lifestyle using fewer plastics with
            great success, practicing the 5R’s: Refuse, Rethink, Reduce,
            Recycle, and Repurpose in my everyday life for the past two years. I
            added the 6th R (rot) in August 2018; yes, composting fruit and
            vegetable scraps to reduce waste and provide free organic fertilizer
            for my garden.
          </p>
          <p>
            My journey was not an easy task but with strong commitment,
            consistency, concern, consciousness, and cause, I did it. Share your
            thoughts of environmental awareness lifestyles with family and
            friends and it will become a domino effect. The results are
            exponential. Take action now, join us living life use less plastic.
          </p>
        </div>
      </div>

      <div className={styles.Profile}>
        <div className={styles.ImageName}>
          <img src={sandy} alt="Sandy" />
          <h3>Sandy</h3>
        </div>

        <div className={styles.Copy}>
          <p>
            Likes: basketball, tennis, travel, watching movies, reading, finding
            good food and wine!
          </p>
          <p>Dislikes: buffets, fake news, Trump, religious fanatics.</p>
        </div>
      </div>
    </section>
  )
}

export default Personnel
