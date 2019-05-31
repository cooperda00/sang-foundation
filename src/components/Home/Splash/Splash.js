//Modules
import React from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Splash.module.scss"

const Splash = () => {
  return (
    <section className={styles.Splash}>
      <div className={styles.SplashContent}>
        <div className={styles.SplashLeft}>
          <Fade delay={500}>
            <h1>Welcome to the Sang Foundation</h1>
          </Fade>
          <Fade delay={1500}>
            <h2>Join the Fight Against Single-Use Plastics</h2>
          </Fade>
        </div>

        <Fade delay={2500}>
          <div className={styles.SplashRight}>
            <h1>Help Us Keep Thailand's Oceans Pristine</h1>
            <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">
              {" "}
              <button>Volunteer</button>
            </a>
          </div>
        </Fade>
      </div>
      <div className={styles.MaskedImage} />
    </section>
  )
}

export default Splash
