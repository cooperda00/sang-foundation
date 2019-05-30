//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./CTA.module.scss"
//Images
import youth from "../../../images/youth-compressor.jpg"
import volunteer from "../../../images/volunteer1-compressor.jpeg"
import logo from "../../../images/logo-old-compressor.png"
import bobo from "../../../images/minibobo-compressor.jpg"

const CTA = ({ cards }) => {
  return (
    <section className={styles.CTA}>
      {cards.includes("contact") && (
        <div>
          <img src={bobo} alt={"Mini Bobo"} />
          <h3>Want to get in touch with us directly?</h3>
          <button>
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      )}

      {cards.includes("about") && (
        <div>
          <img src={logo} alt={"Our logo"} />
          <h3>Want to learn a bit more about who we are?</h3>
          <button>
            <Link to="/about">About</Link>
          </button>
        </div>
      )}

      {cards.includes("volunteer") && (
        <div>
          <img src={volunteer} alt={"Some of our volunteers"} />
          <h3>Help us out by becoming a volunteer</h3>
          <button>
            <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">Join Us</a>
          </button>
        </div>
      )}

      {cards.includes("donate") && (
        <div>
          <img src={youth} alt={"Students holding signs"} />
          <h3>Support us in our continuing fight</h3>
          <button>
            <a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=bb19fa2a41a21&mfid=1558582688970_bb19fa2a41a21#/checkout/openButton">
              Donate
            </a>
          </button>
        </div>
      )}
    </section>
  )
}

export default CTA
