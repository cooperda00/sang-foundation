//Modules
import React from "react"
//Sass
import styles from "./Splash.module.scss"

const Splash = () => {
  return (
    <div className={styles.Splash}>
      <div className={styles.SplashContent}>
        <div className={styles.SplashLeft}>
          <h1>Welcome to the Sang Foundation</h1>
          <h2>Join the Fight Against Single-Use Plastics</h2>
        </div>

        <div className={styles.SplashRight}>
          <h1>Help Us Keep Thailand's Oceans Pristine</h1>
          <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">
            {" "}
            <button>Volunteer</button>
          </a>
        </div>
      </div>
      <div className={styles.MaskedImage} />
    </div>
  )
}

export default Splash
