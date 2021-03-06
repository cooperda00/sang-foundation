//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Footer.module.scss"
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Icon}>
        <a
          href="https://www.facebook.com/Seang2Change/"
          target="_blank"
          rel="noopener noreferrer"
          name="Our Facebook Page"
          aria-label="Go to our Facebook page"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>

      <ul className={styles.Nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
      </ul>

      <ul className={styles.NavMob}>
        <li>
          <a href="#top">Top</a>
        </li>
      </ul>

      <p className={styles.SelfPlug}>
        Developed by{" "}
        <a
          href="https://danielcooper.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Cooper
        </a>
      </p>
    </footer>
  )
}

export default Footer
