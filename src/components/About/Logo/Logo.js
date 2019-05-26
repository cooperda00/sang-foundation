//Modules
import React from "react"
//Sass
import styles from "./Logo.module.scss"
//Images
import logo from "../../../images/logo-old.png"

const Logo = () => {
  return (
    <section className={styles.Logo}>
      <img src={logo} alt="Sang Foundation Logo" />
      <h1>What does the Sang foundation logo mean?</h1>
      <p>
        The Sang foundation logo is designed with 20 beams of light surrounding
        the word Sang designed in Sanskrit styled letters.
      </p>
    </section>
  )
}

export default Logo
