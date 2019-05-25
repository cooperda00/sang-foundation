//Modules
import React from "react"
// import Media from "react-media"
//Sass
import styles from "./Layout.module.scss"
import "./base.scss"
//Components
import Header from "./Header/Header"

const Layout = ({ children }) => (
  <main className={styles.Layout}>
    <Header />
    <div className={styles.Container}>{children}</div>
  </main>
)

export default Layout
