//Modules
import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Splash.module.scss"

const Splash = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 1000)
  }, [])

  return (
    <section className={styles.Splash}>
      <div className={styles.SplashContent}>
        <div className={styles.SplashLeft}>
          <h1>Welcome to the Sang Foundation</h1>

          <h2>Join the Fight Against Single-Use Plastics</h2>
        </div>

        {/* Uses setTimeout to give gatsby time to load the JS */}

        <div className={styles.SplashRight}>
          {ready && (
            <Fade delay={500}>
              <h1>Help Us Keep Thailand's Oceans Pristine</h1>
              <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">
                {" "}
                <button>Volunteer</button>
              </a>
            </Fade>
          )}
        </div>
      </div>
      <div className={styles.MaskedImage} />
    </section>
  )
}

export default Splash
