//Modules
import React from "react"
//Sass
import styles from "./Core.module.scss"
//Images
import group from "../../../images/group.jpg"
import mall from "../../../images/shoppingmall.jpg"
import beachCleanup from "../../../images/beachcleanup.jpg"
import onStage from "../../../images/onstage.jpg"

const Core = props => {
  return (
    <section className={styles.CoreProgram}>
      <h1>Our Programs</h1>

      <ul className={styles.CoreList}>
        {data.map(card => {
          return (
            <li className={card.class && card.class} key={card.altText}>
              <div
                onClick={() => {
                  props.setModalImage(card.image)
                  props.toggleModal(true)
                  props.setModalAltText(card.altText)
                }}
              >
                <img src={card.image} alt={card.altText} />
              </div>
              <p>{card.copy}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

//Data
const data = [
  {
    image: group,
    altText: "A group of people at a workshop",
    copy:
      "We create curriculums for schools to follow to raise awareness. These curriculums are split into pre-school, ages 6-12, ages 12-18 and university level.",
  },
  {
    image: mall,
    altText: "Working with pubic places",
    copy:
      "We organize community activities with shopping malls and other public places.",
    class: `${styles.Item2}`,
  },
  {
    image: beachCleanup,
    altText: "Organising a beach cleanup",
    copy:
      "We organize beach clean-ups with village committees and local school students.",
  },
  {
    image: onStage,
    altText: "A group of students presenting onstage",
    copy:
      " We organize events in cultural centers to encourage companies and government establishments to go plastic free.",
  },
]

export default Core
