//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Personnel.module.scss"

const Personnel = () => {
  const data = useStaticQuery(query)
  const mutsumi = data.mutsumi.childImageSharp.fluid
  const caroline = data.caroline.childImageSharp.fluid
  const victoria = data.victoria.childImageSharp.fluid
  const sandy = data.sandy.childImageSharp.fluid
  const missy = data.missy.childImageSharp.fluid

  return (
    <section className={styles.Personnel}>
      <h2>Founders:</h2>

      <div className={styles.Founders}>
        <Fade>
          <div className={styles.Profile}>
            <div className={styles.ImageName}>
              <Img
                fluid={mutsumi}
                alt="Mutsumi Adachi"
                className={styles.Portrait}
                imgStyle={{ objectPosition: "50% 10%" }}
              />
              <h3>Mutsumi Adachi</h3>
            </div>

            <div className={styles.Copy}>
              <p>
                Mutsumi is the managing partner of Omroom, an alternative
                healing center promoting holistic health and self-awareness. As
                an online platform, Omroom offers workshops and courses focusing
                on yoga, meditation, memory therapy, reiki, Bodytalk, hypnosis
                and Shamanism.
              </p>
              <p>
                Mutsumi travels around the world to offer her memory therapy
                sessions, and teaches students how to open their intuitive mind
                to live in a holistic holographic reality.
              </p>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className={styles.Profile}>
            <div className={styles.ImageName}>
              <Img
                fluid={caroline}
                alt="Caroline Link"
                className={styles.Portrait}
                imgStyle={{ objectPosition: "50% 10%" }}
              />
              <h3>Caroline Link</h3>
            </div>

            <div className={styles.Copy}>
              <p>
                Ms. Caroline Link is the daughter of Harald and Assunta Link.
                Her father is the chairman of B. Grimm, one of Thailand’s oldest
                business institutions, with a 139-year-old tradition of “doing
                business with compassion.” Well-groomed to be the
                fourth-generation successor, Caroline has several roles within
                B. Grimm. She serves as a board member for B. Grimm Power, B.
                Grimm Carrier Thailand, and Merck Thailand. She manages
                corporate communications and public relations strategy for B.
                Grimm Power. She is also responsible for B. Grimm Social
                Engagement strategy.
              </p>
              <p>
                Caroline shares her family’s long-time love for philanthropic
                work, and actively engages in various programs and projects,
                both personal and via B. Grimm. Areas close to her heart are
                education, environmentalism, and culture. At present, B. Grimm
                is a multi-business corporation active in the energy,
                construction and industrial systems, healthcare, lifestyle,
                transport, and real estate sectors.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <h2 className={styles.Title}>Volunteers:</h2>

      <Fade>
        <div className={styles.Profile}>
          <div className={styles.ImageName}>
            <Img
              fluid={victoria}
              alt="Victoria"
              className={styles.Portrait}
              imgStyle={{ objectPosition: "50% 40%" }}
            />
            <h3>Victoria</h3>
          </div>

          <div className={styles.Copy}>
            <p>
              I have been trying to live a lifestyle using fewer plastics with
              great success, practicing the 5R’s: Refuse, Rethink, Reduce,
              Recycle, and Repurpose in my everyday life for the past two years.
              I added the 6th R (rot) in August 2018; yes, composting fruit and
              vegetable scraps to reduce waste and provide free organic
              fertilizer for my garden.
            </p>
            <p>
              My journey was not an easy task but with strong commitment,
              consistency, concern, consciousness, and cause, I did it. Share
              your thoughts of environmental awareness lifestyles with family
              and friends and it will become a domino effect. The results are
              exponential. Take action now, join us living life use less
              plastic.
            </p>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className={styles.Profile}>
          <div className={styles.ImageName}>
            <Img
              fluid={sandy}
              alt="Sandy"
              className={styles.Portrait}
              imgStyle={{ objectPosition: " 50% 60%" }}
            />
            <h3>Sandy</h3>
          </div>

          <div className={styles.Copy}>
            <p>
              Likes: basketball, tennis, travel, watching movies, reading,
              finding good food and wine!
            </p>
            <p>Dislikes: buffets, fake news, Trump, religious fanatics.</p>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className={styles.Profile}>
          <div className={styles.ImageName}>
            <Img
              fluid={missy}
              alt="Missy Sturgis"
              className={styles.Portrait}
            />
            <h3>Missy</h3>
          </div>

          <div className={styles.Copy}>
            <p>
              Missy is an American mom of an 8 year old boy, and having a
              passion for the oceans and animals she was shocked at the extreme
              and offensive overuse of plastics in this country and went looking
              to find groups to join to fight it. And quickly found Mutsumi and
              Sang Foundation.
            </p>
            <p>
              She has lived in Thailand since early 2018 and has lived abroad in
              various countries since 2003, volunteering for three other NGOs
              during those years. Missy currently works as a freelance
              editor/marketing consultant.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  )
}

const query = graphql`
  {
    mutsumi: file(relativePath: { eq: "mutsumi-compressor.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    caroline: file(relativePath: { eq: "caroline-compressor.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    victoria: file(relativePath: { eq: "victoria-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sandy: file(relativePath: { eq: "sandy-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    missy: file(relativePath: { eq: "missy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Personnel
