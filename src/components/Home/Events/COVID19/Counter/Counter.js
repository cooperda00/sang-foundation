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
  const [counter, setCounter] = useState(1)
  const [donationCounter, setDonationCounter] = useState(629)

  // 154 => 354
  // 70674 THB => 215079 ==> 298,629

  useInterval(() => {
    if (counter < 531) {
      const newValue = counter + 2
      setCounter(newValue)
    }
  }, 1)

  useInterval(() => {
    if (donationCounter < 298629) {
      const newValue = donationCounter + 1000
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
        <p className={styles.Number}>฿{donationCounter}</p>
        <p className={styles.Text}>Total donation received</p>
      </div>
    </article>
  )
}

export default Counter
