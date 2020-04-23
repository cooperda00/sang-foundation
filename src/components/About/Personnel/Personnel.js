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
  const narindr = data.narindr.childImageSharp.fluid
  const pacharee = data.pacharee.childImageSharp.fluid
  const victoria = data.victoria.childImageSharp.fluid
  const sandy = data.sandy.childImageSharp.fluid
  const missy = data.missy.childImageSharp.fluid

  return (
    <section className={styles.Personnel}>
      <h2>Committee</h2>

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
                Mutsumi is the founder of the Sang Foundation, which she founded
                after operating the holistic center Omroom in Bangkok.
              </p>
              <p>
                Mutsumi realized that healing an individual cannot adequately
                shift the paradigm. Humans cannot be happy if other beings are
                suffering from an imbalance in the natural world and ongoing
                climate destruction.
              </p>
              <p>
                Only by doing the ground work of helping people and animals as
                well as educating the young generation on how to live in harmony
                with Mother Earth, will we find key to our problems.
              </p>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className={styles.Profile}>
            <div className={styles.ImageName}>
              <Img
                fluid={narindr}
                alt="Dr. Narindr Vang"
                className={styles.Portrait}
                imgStyle={{ objectPosition: "50% 10%" }}
              />
              <h3>Dr. Narindr Vang</h3>
            </div>

            <div className={styles.Copy}>
              <p>
                Dr. Narindr, trained as a Counseling Psychologist, is a licensed
                Hypnotherapist and Trainer of both Hypnosis and Energy
                Pshychology. He has been a certified hyponotist under the
                National Guild of Hypnotists (NGH) in the US, since 1950.
              </p>
              <p>
                Dr Narindr is very keen to study human behavior and how to help
                people and their families to achieve physical and mental health
                as well as social balance. Dr. Vang has spent his time both
                overseas and locally, and as such has extensive experience
                dealing with different cultures, issues and needs to improve his
                patients' wellbeing.
              </p>

              <p>
                Dr. Vang is a devotee of Jesus, he believes love is the solution
                to all.
              </p>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className={styles.Profile}>
            <div className={styles.ImageName}>
              <Img
                fluid={pacharee}
                alt="Pacharee Patumanao"
                className={styles.Portrait}
                imgStyle={{ objectPosition: "50% 40%" }}
              />
              <h3>Pacharee Patumanao</h3>
            </div>

            <div className={styles.Copy}>
              <p>
                Pacharee is an entrepreneur, a public speaker and a creative
                consultant for many businesses in Thailand.
              </p>
              <p>
                Her company Brand Now Asia always gives back to the community
                through events or communications.
              </p>

              <p>
                She is an accomplished CRM and Communications professional and a
                consummate networker.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <h2 className={styles.Title}>Volunteers</h2>

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
              imgStyle={{ objectPosition: " 70% 60%" }}
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
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    narindr: file(relativePath: { eq: "narindr_bio.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    pacharee: file(relativePath: { eq: "pacharee_bio.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    victoria: file(relativePath: { eq: "victoria-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    sandy: file(relativePath: { eq: "sandy-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    missy: file(relativePath: { eq: "missy2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Personnel
