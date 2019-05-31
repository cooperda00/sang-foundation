//Modules
import React from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Bobo.module.scss"
//Images
import cartoon from "../../../images/whalevector-compressor.png"
//Bobo
import bobo from "../../../images/bobo-compressor.png"
import boboGroup from "../../../images/bobogroup-compressor.jpeg"
import boboGroup2 from "../../../images/schoolproject-compressor.jpeg"
import boboGroup3 from "../../../images/insidebobo-compressor.jpeg"
import insideBobo from "../../../images/insidebobo2.jpg"

const boboGallery = [
  { name: "Bobo the whale", image: bobo },
  { name: "Group shot in front of bobo", image: boboGroup },
  { name: "Students exploring bobo", image: boboGroup2 },
  { name: "Students very interested in bobo", image: boboGroup3 },
  { name: "A look inside Bobo", image: insideBobo },
]

const Bobo = props => {
  return (
    <section className={styles.Bobo}>
      <Fade>
        <div className={styles.Title}>
          <img src={cartoon} alt="Bobo The Whale" />
          <h1>Bobo The Whale</h1>
        </div>
      </Fade>

      <div className={styles.Facts}>
        <div className={`${styles.Fact} ${styles.Fact1}`}>
          <Fade top>
            <h2>
              Fact 1: One of the most detrimental environmental problems in our
              world today is the tons of plastic being dumped relentlessly into
              our oceans.
            </h2>
          </Fade>

          <Fade top>
            <p>
              In July 2017, Sang foundation was invited by the UN in Bangkok to
              build a giant whale installation - to be exhibited during the
              Asian Pacific UN Ministerial Environment Summit from 5-8 September
              2017. The result was "Bobo The Whale", a concept created by
              Mutsumi Adachi. As the founder of the Sang Foundation, she wanted
              to raise awareness by displaying a whale with plastic debris in
              its belly.{" "}
            </p>
          </Fade>
          <Fade top>
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
          </Fade>
          <Fade top>
            <p>
              The UN did not provide funds for Bobo; this project was solely
              funded by Sang Foundation volunteers. The time frame for Bobo's
              construction was extremely short, but with help from dedicated
              supporters and volunteers, it was completed successfully and
              managed to create positive change.
            </p>
          </Fade>
        </div>

        <div className={`${styles.Fact} ${styles.Fact2}`}>
          <Fade top>
            <h2>
              Fact 2: Bobo was designed to raise awareness of the problem of
              ocean debris
            </h2>
          </Fade>
          <Fade top>
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
          </Fade>
          <Fade top>
            <p>
              To avoid using plastic, Sang Foundation hoped to make Bobo out of
              recyclable fabric. The Trend Denim Company generously donated 110
              yards of blue denim to cover the body of the whale. Many
              volunteers from Trash Hero Hua Hin collected ocean debris from
              Pattaya. Many other volunteers and school students also helped to
              collect trash to build the exhibit.
            </p>
          </Fade>
        </div>
      </div>

      <Fade>
        <div className={styles.Gallery}>
          {boboGallery.map(image => {
            return (
              <div
                key={image.name}
                onClick={() => {
                  // props.setModalImage(image.image)
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
                {<img src={image.image} alt={image.name} />}
              </div>
            )
          })}
        </div>
      </Fade>
    </section>
  )
}

export default Bobo
