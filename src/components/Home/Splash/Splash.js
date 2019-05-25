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
          <h2>We promote plastic-free living</h2>
        </div>

        <div className={styles.SplashRight}>
          <h1>Help us keep Thailand's oceans pristine</h1>
          <button>Volunteer</button>
        </div>
      </div>
      <div className={styles.MaskedImage} />
    </div>
  )
}

export default Splash
