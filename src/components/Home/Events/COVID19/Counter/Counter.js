//Modules
import React, { useState, useEffect } from "react"
//Sass
import styles from "./Counter.module.scss"
//Icons
import Charity from "../../../../../images/charity_icon.inline.svg"
import Donation from "../../../../../images/baht.inline.svg"
//Hooks
import useInterval from "../../../../../hooks/useInterval"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [donationCounter, setDonationCounter] = useState(74)

  // 154 => 354
  // 70674 THB

  useInterval(() => {
    if (counter < 354) {
      const newValue = counter + 1
      setCounter(newValue)
    }
  }, 10)

  useInterval(() => {
    if (donationCounter < 70674) {
      const newValue = donationCounter + 100
      setDonationCounter(newValue)
    }
  }, 1)

  return (
    <article className={styles.CounterContainer}>
      <div className={styles.Counter}>
        <Charity className={styles.Icon} />
        <p className={styles.Number}>{counter}</p>
        <p className={styles.Text}>Families fed so far!</p>
      </div>

      <div className={styles.Counter}>
        <Donation className={styles.Icon} />
        <p className={styles.Number}>{donationCounter}</p>
        <p className={styles.Text}>Total Baht donated!</p>
      </div>
    </article>
  )
}

export default Counter
