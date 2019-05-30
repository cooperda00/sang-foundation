//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./CTA.module.scss"
//Images
import bobo from "../../../images/bobo-compressor.png"
import protest from "../../../images/protest2-compressor.jpg"
const CTA = () => {
  return (
    <section className={styles.CTA}>
      <div>
        <img src={bobo} alt="Bobo the Whale" />
        <h3>
          Want to contact us directly? Send us a message and we will do our best
          to get back to you as soon as we can!
        </h3>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </div>

      <div>
        <img src={protest} alt="A group protest" />
        <h3>Want to learn a bit more about who we are?</h3>
        <button>
          <Link to="/about">About</Link>
        </button>
      </div>
    </section>
  )
}

export default CTA
