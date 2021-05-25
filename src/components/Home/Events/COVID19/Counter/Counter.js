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

const Counter = ({ baht, people, families, villages, slums, petFood }) => {
  return (
    <article className={styles.CounterContainer}>
      {baht && (
        <div className={styles.Counter}>
          <Donation className={styles.Icon} />
          <p className={styles.Number}>{baht}</p>
          <p className={styles.Text}>Total donation received</p>
        </div>
      )}

      {people && (
        <div className={styles.Counter}>
          <People className={styles.Icon} />
          <p className={styles.Number}>{people}</p>
          <p className={styles.Text}>Total people helped</p>
        </div>
      )}

      {families && (
        <div className={styles.Counter}>
          <Charity className={styles.Icon} />
          <p className={styles.Number}>{families}</p>
          <p className={styles.Text}>Families fed</p>
        </div>
      )}

      {villages && (
        <div className={styles.Counter}>
          <Village className={styles.Icon} />
          <p className={styles.Number}>{villages}</p>
          <p className={styles.Text}>Villages</p>
        </div>
      )}

      {slums && (
        <div className={styles.Counter}>
          <Slum className={styles.Icon} />
          <p className={styles.Number}>{slums}</p>
          <p className={styles.Text}>Slums</p>
        </div>
      )}

      {petFood && (
        <div className={styles.Counter}>
          <Cat className={styles.Icon} />
          <p className={styles.Number}>{petFood}</p>
          <p className={styles.Text}>Dog and cat food donated</p>
        </div>
      )}
    </article>
  )
}

export default Counter
