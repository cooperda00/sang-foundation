//Modules
import React from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Events.module.scss"

const Events = ({ children }) => {
  return (
    <Fade>
      <section className={styles.Events}>
        <h1>Upcoming Events</h1>
        {children}
      </section>
    </Fade>
  )
}

export default Events
