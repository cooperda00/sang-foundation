//Modules
import React from "react"
//Sass
import styles from "./Layout.module.scss"
import "./base.scss"
//Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Container}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
