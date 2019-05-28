//Modules
import React from "react"
//Sass
import styles from "./Bobo.module.scss"
//Images
import cartoon from "../../../images/whalevector.png"
//Bobo
import bobo from "../../../images/bobo.png"
import boboGroup from "../../../images/bobogroup.jpeg"
import boboGroup2 from "../../../images/schoolproject.jpeg"
import boboGroup3 from "../../../images/insidebobo.jpeg"
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
      <div className={styles.Title}>
        <img src={cartoon} alt="Bobo The Whale" />
        <h1>Bobo The Whale</h1>
      </div>

      <div className={styles.Facts}>
        <div className={`${styles.Fact} ${styles.Fact1}`}>
          <h2>
            Fact 1: One of the most detrimental environmental problems in our
            world today is the tons of plastic being dumped relentlessly into
            our oceans.
          </h2>
          <p>
            In July 2017, Sang foundation was invited by the UN in Bangkok to
            build a giant whale installation - to be exhibited during the Asian
            Pacific UN Ministerial Environment Summit from 5-8 September 2017.
            The result was "Bobo The Whale", a concept created by Mutsumi
            Adachi. As the founder of the Sang Foundation, she wanted to raise
            awareness by displaying a whale with plastic debris in its belly.{" "}
          </p>

          <p>
            Bobo had different interactive features to educate viewers, as well
            as a poem expressing the sadness of this environmental emergency.
            The UN also invited the Clean Ocean Organization of New York to play
            a 4D VR video called "The Lonely Whale" at the summit. This VR video
            gave participants the experience of a being a whale swimming in a
            sea of trash. Viewers could clearly imagine how this magnificent
            whale would suffer a slow and painful death from ingesting plastic
            debris. The exhibits focused on the disastrous effects of ocean
            pollution, particularly around Thailand.{" "}
          </p>

          <p>
            The UN did not provide funds for Bobo; this project was solely
            funded by Sang Foundation volunteers. The time frame for Bobo's
            construction was extremely short, but with help from dedicated
            supporters and volunteers, it was completed successfully and managed
            to create positive change.
          </p>
        </div>

        <div className={`${styles.Fact} ${styles.Fact2}`}>
          <h2>
            Fact 2: Bobo was designed to raise awareness of the problem of ocean
            debris
          </h2>
          <p>
            To create Bobo, Mutsumi contacted Thai Taiyo Tent factory. Mr. Tohru
            Hirono made the technical drawing for the design. The 3 meter-tall,
            3meter-wide, and nearly 9 meter-long structure were completed after
            a good deal of precise concentrated efforts. Bobo has fins on both
            sides measuring around 1.5m each, and a 4 meter-long tail stuffed
            with plastic bottles collected from the UN coffee shops and
            cafeteria, and from volunteers' personal contributions.{" "}
          </p>

          <p>
            To avoid using plastic, Sang Foundation hoped to make Bobo out of
            recyclable fabric. The Trend Denim Company generously donated 110
            yards of blue denim to cover the body of the whale. Many volunteers
            from Trash Hero Hua Hin collected ocean debris from Pattaya. Many
            other volunteers and school students also helped to collect trash to
            build the exhibit.
          </p>
        </div>
      </div>

      <div className={styles.Gallery}>
        {boboGallery.map(image => {
          return (
            <div
              key={image.name}
              onClick={() => {
                props.setModalImage(image.image)
                props.toggleModal(true)
                props.setModalAltText(image.name)
              }}
            >
              {<img src={image.image} alt={image.name} />}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Bobo
