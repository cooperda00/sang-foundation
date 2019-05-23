//Modules
import React from "react"
import Media from "react-media"
//Sass
import styles from "./Layout.module.scss"
import "./base.scss"
//Components
import Header from "./Header/Header"
import HeaderMobile from "./HeaderMobile/HeaderMobile"

const Layout = ({ children }) => (
  <main className={styles.Layout}>
    <Media query="(max-width: 768px)">
      {matches => (matches ? <HeaderMobile /> : <Header />)}
    </Media>
    <div className={styles.Container}>{children}</div>
  </main>
)

export default Layout
