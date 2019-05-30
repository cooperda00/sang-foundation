//Modules
import { Link } from "gatsby"
import React, { useState } from "react"
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
    <header className={styles.Header}>
      <div className={styles.NavLinksLeft}>
        <Link activeStyle={{ fontWeight: "bold" }} to="/">
          Home
        </Link>

        <Link activeStyle={{ fontWeight: "bold" }} to="/programs">
          Our Programs
        </Link>
      </div>

      <div className={styles.MainLogo}>
        <Link to="/">
          <img src={logo} alt="Sang Foundation Logo" />
        </Link>
      </div>

      <div className={styles.NavLinksRight}>
        <Link activeStyle={{ fontWeight: "bold" }} to="/about">
          About Us
        </Link>

        <Link to="/contact" activeStyle={{ fontWeight: "bold" }}>
          Contact
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

      <div className={navLinks}>
        <Link to="/">Home</Link>
        <Link to="/programs">Our Programs</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  )
}

export default Header
