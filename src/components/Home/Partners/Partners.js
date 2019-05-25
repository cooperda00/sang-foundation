//Modules
import React from "react"
//Sass
import styles from "./Partners.module.scss"
//Images
import alliance from "../../../images/alliancefrancaise.png"
import ecoBeasts from "../../../images/ecobeasts.png"
import grinGreen from "../../../images/gringreen.png"
import preciousPlastic from "../../../images/preciousplastic.png"
import trashHero from "../../../images/trashhero.png"

const Partners = () => {
  return (
    <section className={styles.Partners}>
      <h1>Our Partners</h1>
      <div className={styles.PartnerContainer}>
        <div className={styles.Partner}>
          <img src={alliance} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eaque
            dolores quisquam molestias, numquam laudantium qui quibusdam. Ullam
            laborum modi atque minus fuga nostrum ipsum mollitia dolore? Animi,
            eos sint.
          </p>
          <div />
        </div>

        <div className={styles.Partner}>
          <img src={ecoBeasts} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eaque
            dolores quisquam molestias, numquam laudantium qui quibusdam. Ullam
            laborum modi atque minus fuga nostrum ipsum mollitia dolore? Animi,
            eos sint.
          </p>
          <div />
        </div>

        <div className={styles.Partner}>
          <img src={grinGreen} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eaque
            dolores quisquam molestias, numquam laudantium qui quibusdam. Ullam
            laborum modi atque minus fuga nostrum ipsum mollitia dolore? Animi,
            eos sint.
          </p>
          <div />
        </div>

        <div className={styles.Partner}>
          <img src={preciousPlastic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eaque
            dolores quisquam molestias, numquam laudantium qui quibusdam. Ullam
            laborum modi atque minus fuga nostrum ipsum mollitia dolore? Animi,
            eos sint.
          </p>
          <div />
        </div>

        <div className={styles.Partner}>
          <img src={trashHero} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eaque
            dolores quisquam molestias, numquam laudantium qui quibusdam. Ullam
            laborum modi atque minus fuga nostrum ipsum mollitia dolore? Animi,
            eos sint.
          </p>
          <div />
        </div>
      </div>
    </section>
  )
}

export default Partners
