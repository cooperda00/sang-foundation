//Modules
import React from "react"
//Sass
import styles from "./Introduction.module.scss"
//Images
import logo from "../../../images/logo-old-compressor.png"

const Introduction = () => {
  return (
    <section className={styles.Introduction}>
      <div className={styles.Left}>
        <h1>About Us</h1>
        <h2>Sang means light in Sanskrit and in Thai</h2>
        <p>
          In the quest for a cleaner and greener globe and a crystal clear
          ocean, 'Sang' is literally translated as 'light' in Thai, and will
          continue to ignite the creation of love and care for our beloved
          mother earth for the generations to come.
        </p>
        <p>
          The Sang Foundation was created to raise public awareness that plastic
          waste is now at a critical level and more and more marine animals are
          painfully dying because of our addiction to plastic. We are here to
          spread the message that this does not need to happen - there are
          alternatives to plastic.
        </p>

        <h2>What does the Sang foundation logo mean?</h2>

        <p>
          The Sang foundation logo is designed with 20 beams of light
          surrounding the word Sang designed in Sanskrit styled letters.
        </p>
      </div>

      <div className={styles.Right}>
        <img src={logo} alt="Sang Foundation Logo" />
      </div>
    </section>
  )
}

export default Introduction
