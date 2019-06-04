//Modules
import React from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Core.module.scss"
//Images
import group from "../../../images/group-compressor.jpg"
import mall from "../../../images/shoppingmall-compressor.jpg"
import beachCleanup from "../../../images/beachcleanup-compressor.jpg"
import onStage from "../../../images/onstage-compressor.jpg"

const Core = props => {
  return (
    <section className={styles.CoreProgram}>
      <h1>Our Core Programs</h1>
      <ul className={styles.CoreList}>
        {data.map(card => {
          return (
            <Fade>
              <li className={card.class} key={card.altText}>
                <div
                  onClick={() => {
                    props.setModalImage(card.image)
                    props.toggleModal(true)

                    const dataClone = [...data].filter(
                      item => item.altText !== card.altText
                    )
                    const newArray = [card, ...dataClone]
                    props.setModalImage(newArray)
                  }}
                >
                  <img src={card.image} alt={card.altText} />
                </div>

                <p>{card.copy}</p>
              </li>
            </Fade>
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
    class: `${styles.One}`,
  },
  {
    image: mall,
    altText: "Working with pubic places",
    copy:
      "We organize community activities with shopping malls and other public places.",
    class: `${styles.Two}`,
  },
  {
    image: beachCleanup,
    altText: "Organising a beach cleanup",
    copy:
      "We organize beach clean-ups with village committees and local school students.",
    class: `${styles.Three}`,
  },
  {
    image: onStage,
    altText: "A group of students presenting onstage",
    copy:
      " We organize events in cultural centers to encourage companies and government establishments to go plastic free.",
    class: `${styles.Four}`,
  },
]

export default Core
