//Modules
import React from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Facebook.module.scss"

const Facebook = () => {
  return (
    <Fade>
      <section className={styles.Facebook}>
        <div className={styles.FacebookContainerMobile}>
          <div className={styles.Message}>
            <p>
              Keep up to date with all our news and events by following our
              Facebook Page
            </p>
          </div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSeang2Change%2F&tabs=timeline&width=320&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            width="320"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            title="Facebook Widget"
          />
        </div>

        <div className={styles.FacebookContainerLarge}>
          <div className={styles.Message}>
            <p>
              Keep up to date with all our news and events by following our
              Facebook Page
            </p>
          </div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSeang2Change%2F&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            width="500"
            height="800"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            title="Facebook Widget"
          />
        </div>
      </section>
    </Fade>
  )
}

export default Facebook
