//Modules
import React from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./SectionOne.module.scss"
//Images
import group from "../../../images/group-compressor.jpg"
import bobo from "../../../images/bobo-compressor.png"
import youth from "../../../images/youth-compressor.jpg"
import youth2 from "../../../images/youth2-compressor.jpeg"
import bins from "../../../images/cleanup2-compressor.jpg"
import cleanup from "../../../images/cleanup1-compressor.jpg"

const SectionOne = props => {
  return (
    <section className={styles.SectionOne}>
      <Fade>
        <div className={styles.Intro}>
          <h3>Our Mission and Vision</h3>
          <p>
            The Sang Foundation was created to raise public awareness that
            plastic waste is now at a critical level and more and more marine
            animals are painfully dying because of our addiction to plastic. We
            are here to spread the message that this does not need to happen -
            there are alternatives to plastic.
          </p>
          <p>
            Starting with our iconic 11-meter-long Bobo The Whale, made with
            metal structures and covered with denim, we raise awareness about
            our disastrous ocean debris situation in Thailand through school
            visites and events.
          </p>
          <p>
            Bobo the Whale visits schools during an environmental awareness
            month at the school with accompanied activities and lessons.
          </p>
          <p>
            Through these educational activities and workshops, we continue to
            encourage children to start a waste-free living style with their
            family members.
          </p>
        </div>
      </Fade>

      <Fade>
        <div className={styles.ImageGrid}>
          {data.map(card => {
            return (
              <div
                onClick={() => {
                  const dataClone = [...data].filter(
                    item => item.altText !== card.altText
                  )
                  const newArray = [card, ...dataClone]
                  props.setModalImage(newArray)
                  props.toggleModal(true)
                  props.setModalAltText(card.altText)
                }}
                key={card.altText}
              >
                <img src={card.image} alt={card.altText} />
              </div>
            )
          })}
        </div>
      </Fade>
    </section>
  )
}

//Data
const data = [
  {
    image: youth,
    altText: "Students holding signs",
  },
  {
    image: bins,
    altText: "Recycling station at the beach",
  },
  {
    image: cleanup,
    altText: "Kids participating in a beach cleanup",
  },
  {
    image: group,
    altText: "Group photo at a workshop",
  },
  {
    image: youth2,
    altText: "Students participating in a workshop activity",
  },
  {
    image: bobo,
    altText: "Bobo the whale",
  },
]

export default SectionOne
