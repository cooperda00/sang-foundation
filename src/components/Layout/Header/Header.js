//Modules
import { Link } from "gatsby"
import React from "react"
//Sass
import styles from "./Header.module.scss"
//Images
import logo from "../../../images/logo-old.png"

const Header = () => (
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
  </header>
)

export default Header
