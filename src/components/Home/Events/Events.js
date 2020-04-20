//Modules
import React from "react"
//Sass
import styles from "./Events.module.scss"
//Components
import COVID19 from "./COVID19/COVID19"
import EarthDay2020 from "./EarthDay2020/EarthDay2020"
import CCCL2020 from "./CCCL2020/CCCL2020"

const Events = () => {
  return (
    <section className={styles.Events}>
      <h1>News and Notices</h1>
      <COVID19 />
      <hr />
      <CCCL2020 />
      <hr />
      <EarthDay2020 />
    </section>
  )
}

export default Events
