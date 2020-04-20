//Modules
import React from "react"

import { Link } from "gatsby"
//Sass
import styles from "./Splash.module.scss"

const Splash = () => {
  return (
    <section className={styles.Splash}>
      <div className={styles.SplashContent}>
        <div className={styles.SplashLeft}>
          <h1>Welcome to the Sang Foundation</h1>

          <h2>Join the Fight Against Single-Use Plastics</h2>
        </div>

        <div className={styles.SplashRight}>
          <h1>Help Us Prevent Climate Disaster</h1>
          <Link to="/donate">
            <button>Donate</button>
          </Link>
        </div>
      </div>
      <div className={styles.MaskedImage} />
    </section>
  )
}

export default Splash
