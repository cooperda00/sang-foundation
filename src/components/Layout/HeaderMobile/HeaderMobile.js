//Modules
import { Link } from "gatsby"
import React, { useState } from "react"
//Sass
import styles from "./HeaderMobile.module.scss"
//Images
import logo from "../../../images/logo-old.png"
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const HeaderMobile = () => {
  const [menu, toggleMenu] = useState(false)

  const navLinks = menu
    ? `${styles.NavLinks}`
    : `${styles.NavLinks} ${styles.Hidden}`

  return (
    <header className={styles.Header}>
      <div className={styles.MainLogo}>
        <Link to="/">
          <img src={logo} alt="Sang Foundation Logo" />
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

export default HeaderMobile
