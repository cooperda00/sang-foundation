//Modules
import React, { useState, useEffect } from "react"
//Sass
import styles from "./Counter.module.scss"
//Icons
import Charity from "../../../../../images/charity_icon.inline.svg"
//Hooks
import useInterval from "../../../../../hooks/useInterval"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  useInterval(() => {
    if (counter < 154) {
      const newValue = counter + 1
      setCounter(newValue)
    }
  }, 20)

  return (
    <article className={styles.Counter}>
      <Charity className={styles.Icon} />
      <p className={styles.Number}>{counter}</p>
      <p className={styles.Text}>Families fed so far!</p>
    </article>
  )
}

export default Counter
