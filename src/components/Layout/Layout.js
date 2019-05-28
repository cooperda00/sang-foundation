//Modules
import React from "react"
//Sass
import styles from "./Layout.module.scss"
import "./base.scss"
//Components
import Header from "./Header/Header"

const Layout = ({ children }) => {
  return (
    <main className={styles.Layout}>
      <Header />
      <div className={styles.Container}>{children}</div>
    </main>
  )
}

export default Layout
