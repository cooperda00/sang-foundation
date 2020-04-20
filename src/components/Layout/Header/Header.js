//Modules
import { Link } from "gatsby"
import React, { useState } from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Header.module.scss"
//Images
import logo from "../../../images/logo-old-compressor.png"
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [menu, toggleMenu] = useState(false)

  const navLinks = menu
    ? `${styles.NavLinks}`
    : `${styles.NavLinks} ${styles.Hidden}`

  return (
    <header className={styles.Header} id="top">
      <div className={styles.NavLinksLeft}>
        <Link activeStyle={{ fontWeight: "bold" }} to="/programs">
          Programs
        </Link>

        <Link activeStyle={{ fontWeight: "bold" }} to="/about">
          About
        </Link>

        <Link activeStyle={{ fontWeight: "bold" }} to="/gallery">
          Gallery
        </Link>
      </div>

      <div className={styles.MainLogo}>
        <Link to="/">
          <img src={logo} alt="Sang Foundation Logo" />
        </Link>
      </div>

      <div className={styles.NavLinksRight}>
        <Link to="/contact" activeStyle={{ fontWeight: "bold" }}>
          Contact
        </Link>

        <Link
          to="/covid19"
          activeStyle={{ fontWeight: "bold" }}
          className={styles.Donate}
        >
          COVID-19
        </Link>

        <Link
          to="/donate"
          activeStyle={{ fontWeight: "bold" }}
          className={styles.Donate}
        >
          Donate
        </Link>
      </div>

      <button
        className={styles.HamburgerMenu}
        onClick={() => {
          toggleMenu(!menu)
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Fade right when={menu} duration={300}>
        <div className={navLinks}>
          <Link to="/">Home</Link>
          <Link to="/programs">Our Programs</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/covid19" className={styles.DonateMini}>
            COVID-19
          </Link>
          <Link to="/donate" className={styles.DonateMini}>
            Donate
          </Link>
        </div>
      </Fade>
    </header>
  )
}

export default Header
