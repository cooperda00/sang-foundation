//Modules
import React from "react"
//Sass
import styles from "./SectionOne.module.scss"
//Images
import straws from "../../../images/nostraws.jpg"
import group from "../../../images/group.jpg"
import boat from "../../../images/onboat.jpg"
import bobo from "../../../images/bobo.png"

const SectionOne = () => {
  return (
    <section className={styles.SectionOne}>
      <div className={styles.Intro}>
        <h3>Our Mission and Vision</h3>
        <p>
          Starting with our iconic 11-meter-long Bobo The Whale, made with metal
          structures and covered with denim, we raise awareness about our
          disastrous ocean debris situation in Thailand.
        </p>
        <p>
          Plus ringing alarm of the emergency for our global climate change.
        </p>
        <p>
          Through school educational activities and workshops, we continue to
          encourage children to start a waste-free living style with their
          family members.
        </p>
      </div>
      <br />
      <div className={styles.ImageGrid}>
        <div>
          <img src={straws} alt="Say no to plastic straws" />
        </div>
        <div>
          <img src={group} alt="Team Effort" />
        </div>
        <div>
          <img src={boat} alt="No more plastic bottles" />
        </div>
        <div>
          <img src={bobo} alt="Bobo the whale" />
        </div>
      </div>
    </section>
  )
}

export default SectionOne
