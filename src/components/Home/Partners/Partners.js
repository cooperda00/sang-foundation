//Modules
import React from "react"
//Sass
import styles from "./Partners.module.scss"
//Images
import bahtByBaht from "../../../images/bahtbybaht.png"
import ecoBeasts from "../../../images/ecobeasts.png"
import grinGreen from "../../../images/gringreen.png"
import preciousPlastic from "../../../images/preciousplastic.png"
import trashHero from "../../../images/trashhero.png"

const Partners = () => {
  return (
    <section className={styles.Partners}>
      <h1>Our Partners</h1>
      <div className={styles.PartnerContainer}>
        <a
          href="https://www.bahtbybaht.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.Partner}>
            <div className={styles.Image}>
              <img src={bahtByBaht} alt="Baht By Baht" />
            </div>
            <h2>Baht by Baht</h2>
          </div>
        </a>

        <a
          href="https://ecobeastsbkk.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.Partner}>
            <div className={styles.Image}>
              <img src={ecoBeasts} alt="Eco Beasts" />
            </div>
            <h2>Eco Beasts</h2>
          </div>
        </a>
        <a
          href="https://gringreen.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.Partner}>
            <div className={styles.Image}>
              <img src={grinGreen} alt="Grin Green International" />
            </div>
            <h2>Grin Green International</h2>
          </div>
        </a>

        <a
          href="https://preciousplastic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.Partner}>
            <div className={styles.Image}>
              <img src={preciousPlastic} alt="Precious Plastic" />
            </div>
            <h2>Precious Plastic</h2>
          </div>
        </a>

        <a
          href=" https://trashhero.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.Partner}>
            <div className={styles.Image}>
              <img src={trashHero} alt="Trash Hero" />
            </div>
            <h2>Trash Hero Bangkok</h2>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Partners
