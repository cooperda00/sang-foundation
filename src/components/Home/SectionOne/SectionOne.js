//Modules
import React from "react"
//Sass
import styles from "./SectionOne.module.scss"
//Images
import straws from "../../../images/nostraws-compressor.jpg"
import group from "../../../images/group-compressor.jpg"
import boat from "../../../images/onboat-compressor.jpg"
import bobo from "../../../images/bobo-compressor.png"

const SectionOne = props => {
  return (
    <section className={styles.SectionOne}>
      <div className={styles.Intro}>
        <h3>Our Mission and Vision</h3>
        <p>
          The Sang Foundation was created to raise public awareness that plastic
          waste is now at a critical level and more and more marine animals are
          painfully dying because of our addiction to plastic. We are here to
          spread the message that this does not need to happen - there are
          alternatives to plastic.
        </p>
        <p>
          Starting with our iconic 11-meter-long Bobo The Whale, made with metal
          structures and covered with denim, we raise awareness about our
          disastrous ocean debris situation in Thailand through school visites
          and events.
        </p>
        <p>
          Bobo the Whale visits schools during an environmental awareness month
          at the school with accompanied activities and lessons.
        </p>
        <p>
          Through these educational activities and workshops, we continue to
          encourage children to start a waste-free living style with their
          family members.
        </p>
      </div>
      <br />

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
    </section>
  )
}

//Data
const data = [
  {
    image: straws,
    altText: "Say no to plastic straws",
  },
  {
    image: group,
    altText: "Team Effort",
  },
  {
    image: boat,
    altText: "No more plastic bottles",
  },
  {
    image: bobo,
    altText: "Bobo the whale",
  },
]

export default SectionOne
