//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./SplashAlt.module.scss"
//Images
import children from "../../../images/childrenEating.png"

const SplashAlt = () => {
  return (
    <section className={styles.Splash}>
      <div className={styles.SplashImage}>
        <img alt="Children Eating" src={children} />
      </div>

      <div className={styles.SplashContent}>
        <div>
          <h1>Welcome to the Sang Foundation</h1>

          <h2>COVID Crisis Food Rescue Activities</h2>

          <Link to="/donate">
            <button>Donate</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SplashAlt
