//Modules
import React from "react"
//Sass
import styles from "./Core.module.scss"
//Images
import group from "../../../images/group.jpg"
import mall from "../../../images/shoppingmall.jpg"
import beachCleanup from "../../../images/beachcleanup.jpg"
import onStage from "../../../images/onstage.jpg"

const Core = () => {
  return (
    <section className={styles.CoreProgram}>
      <h1>Our Programs</h1>

      <ul className={styles.CoreList}>
        <li>
          <div>
            <img src={group} alt={"A group of people at a workshop"} />
          </div>
          <p>
            We create curriculums for schools to follow to raise awareness.
            These curriculums are split into pre-school, ages 6-12, ages 12-18
            and university level.
          </p>
        </li>

        <li className={styles.Item2}>
          <div>
            <img src={mall} alt={"Working with public places"} />
          </div>
          <p>
            We organize community activities with shopping malls and other
            public places.
          </p>
        </li>

        <li>
          <div>
            <img src={beachCleanup} alt={"Organising a beach cleanup"} />
          </div>
          <p>
            We organize beach clean-ups with village committees and local school
            students.
          </p>
        </li>

        <li>
          <div>
            <img src={onStage} alt={"A group of students presenting onstage"} />
          </div>
          <p>
            We organize events in cultural centers to encourage companies and
            government establishments to go plastic free.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Core
