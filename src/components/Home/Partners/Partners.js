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
            <h4>Baht by Baht</h4>
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
            <h4>Eco Beasts</h4>
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
            <h4>Grin Green International</h4>
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
            <h4>Precious Plastic</h4>
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
            <h4>Trash Hero Bangkok</h4>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Partners
