//Modules
import React from "react"
//Sass
import styles from "./Counter.module.scss"
//Icons
import Charity from "../../../../../images/charity_icon.inline.svg"
import Donation from "../../../../../images/baht.inline.svg"
import People from "../../../../../images/people.inline.svg"
import Village from "../../../../../images/village.inline.svg"
import Slum from "../../../../../images/slum.inline.svg"
import Cat from "../../../../../images/cat.inline.svg"

const Counter = () => {
  return (
    <article className={styles.CounterContainer}>
      <div className={styles.Counter}>
        <Donation className={styles.Icon} />
        <p className={styles.Number}>฿1,023,945</p>
        <p className={styles.Text}>Total donation received</p>
      </div>

      <div className={styles.Counter}>
        <People className={styles.Icon} />
        <p className={styles.Number}>26,500</p>
        <p className={styles.Text}>Total people helped</p>
      </div>

      <div className={styles.Counter}>
        <Charity className={styles.Icon} />
        <p className={styles.Number}>4,353</p>
        <p className={styles.Text}>Families fed</p>
      </div>

      <div className={styles.Counter}>
        <Village className={styles.Icon} />
        <p className={styles.Number}>28</p>
        <p className={styles.Text}>Villages</p>
      </div>

      <div className={styles.Counter}>
        <Slum className={styles.Icon} />
        <p className={styles.Number}>13</p>
        <p className={styles.Text}>Slums</p>
      </div>

      <div className={styles.Counter}>
        <Cat className={styles.Icon} />
        <p className={styles.Number}>600kg</p>
        <p className={styles.Text}>Dog and cat food donated</p>
      </div>
    </article>
  )
}

export default Counter
