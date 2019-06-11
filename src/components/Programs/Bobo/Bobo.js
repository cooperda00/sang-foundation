//Modules
import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./Bobo.module.scss"
//Bobo Gallery
import bobo from "../../../images/bobo-compressor.png"
import boboGroup from "../../../images/bobogroup-compressor.jpeg"
import boboGroup2 from "../../../images/schoolproject-compressor.jpeg"
import boboGroup3 from "../../../images/insidebobo-compressor.jpeg"
import insideBobo from "../../../images/insidebobo2.jpg"

const Bobo = props => {
  const data = useStaticQuery(query)

  const boboCartoon = data.bobo.edges[0].node.childImageSharp.fluid
  const whaleImage = data.whale.childImageSharp.fluid

  const boboGallery = [
    { name: "Bobo the whale", image: data.bobo2.childImageSharp.fluid },
    {
      name: "Group shot in front of bobo",
      image: data.boboGroup.childImageSharp.fluid,
    },
    {
      name: "Students exploring bobo",
      image: data.boboGroup2.childImageSharp.fluid,
    },
    {
      name: "Students very interested in bobo",
      image: data.boboGroup3.childImageSharp.fluid,
    },
    {
      name: "A look inside Bobo",
      image: data.insideBobo.childImageSharp.fluid,
    },
  ]

  return (
    <section className={styles.Bobo}>
      <div className={styles.Title}>
        <Img
          fluid={boboCartoon}
          alt={"Bobo The Whale"}
          className={styles.Img}
        />
        <h1>Bobo The Whale</h1>
      </div>

      <div className={styles.Facts}>
        <Fade>
          <div className={`${styles.Fact} ${styles.Fact1}`}>
            <h2>
              Fact 1: One of the most detrimental environmental problems in our
              world today is the tons of plastic being dumped relentlessly into
              our oceans.
            </h2>

            <p>
              In July 2017, Sang foundation was invited by the UN in Bangkok to
              build a giant whale installation - to be exhibited during the
              Asian Pacific UN Ministerial Environment Summit from 5-8 September
              2017. The result was "Bobo The Whale", a concept created by
              Mutsumi Adachi. As the founder of the Sang Foundation, she wanted
              to raise awareness by displaying a whale with plastic debris in
              its belly.{" "}
            </p>

            <p>
              Bobo had different interactive features to educate viewers, as
              well as a poem expressing the sadness of this environmental
              emergency. The UN also invited the Clean Ocean Organization of New
              York to play a 4D VR video called "The Lonely Whale" at the
              summit. This VR video gave participants the experience of a being
              a whale swimming in a sea of trash. Viewers could clearly imagine
              how this magnificent whale would suffer a slow and painful death
              from ingesting plastic debris. The exhibits focused on the
              disastrous effects of ocean pollution, particularly around
              Thailand.{" "}
            </p>

            <p>
              The UN did not provide funds for Bobo; this project was solely
              funded by Sang Foundation volunteers. The time frame for Bobo's
              construction was extremely short, but with help from dedicated
              supporters and volunteers, it was completed successfully and
              managed to create positive change.
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={`${styles.Fact} ${styles.Fact2}`}>
            <h2>
              Fact 2: Bobo was designed to raise awareness of the problem of
              ocean debris
            </h2>

            <p>
              To create Bobo, Mutsumi contacted Thai Taiyo Tent factory. Mr.
              Tohru Hirono made the technical drawing for the design. The 3
              meter-tall, 3meter-wide, and nearly 9 meter-long structure were
              completed after a good deal of precise concentrated efforts. Bobo
              has fins on both sides measuring around 1.5m each, and a 4
              meter-long tail stuffed with plastic bottles collected from the UN
              coffee shops and cafeteria, and from volunteers' personal
              contributions.{" "}
            </p>

            <p>
              To avoid using plastic, Sang Foundation hoped to make Bobo out of
              recyclable fabric. The Trend Denim Company generously donated 110
              yards of blue denim to cover the body of the whale. Many
              volunteers from Trash Hero Hua Hin collected ocean debris from
              Pattaya. Many other volunteers and school students also helped to
              collect trash to build the exhibit.
            </p>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className={styles.Gallery}>
          {boboGallery.map(image => {
            return (
              <div
                key={image.name}
                onClick={() => {
                  props.toggleModal(true)

                  props.setModalAltText(image.name)

                  const dataClone = [...boboGallery].filter(
                    item => item.name !== image.name
                  )

                  const newArray = [image, ...dataClone].map(item => {
                    return {
                      image: item.image,
                      altText: item.name,
                    }
                  })

                  props.setModalImage(newArray)
                }}
              >
                {
                  <Img
                    fluid={image.image}
                    alt={image.name}
                    className={styles.Image}
                  />
                }
              </div>
            )
          })}
        </div>
      </Fade>

      <Fade>
        <div className={styles.WhaleImage}>
          <Img
            fluid={whaleImage}
            alt={"A real life whale"}
            className={styles.WhaleImageJpg}
          />
        </div>
      </Fade>
    </section>
  )
}

const query = graphql`
  {
    bobo: allFile(filter: { relativePath: { eq: "bobologo.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }

    whale: file(relativePath: { eq: "bigwhale2-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    bobo2: file(relativePath: { eq: "bobo-compressor.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    boboGroup: file(relativePath: { eq: "bobogroup-compressor.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    boboGroup2: file(relativePath: { eq: "schoolproject-compressor.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    boboGroup3: file(relativePath: { eq: "insidebobo-compressor.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    insideBobo: file(relativePath: { eq: "insidebobo2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Bobo
