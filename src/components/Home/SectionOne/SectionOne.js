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
