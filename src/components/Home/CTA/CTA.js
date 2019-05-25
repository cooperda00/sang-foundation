//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./CTA.module.scss"
//Images
import bobo from "../../../images/bobo_group_2.jpeg"
import volunteer from "../../../images/volunteer1.jpeg"
import protest from "../../../images/protest.jpeg"

const CTA = () => {
  return (
    <section className={styles.CTA}>
      <div>
        <img src={bobo} alt="Bobo the Whale" />
        <h3>What to know more about what we do?</h3>
        <button>
          <Link to="/about">Learn More</Link>
        </button>
      </div>

      <div>
        <img src={volunteer} alt="Become a volunteer" className={styles.Test} />
        <h3>Start acting now and become a volunteer</h3>
        <button>
          <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">Join Us</a>
        </button>
      </div>

      <div>
        <img src={protest} alt="Support Us" />
        <h3>Support us in our continuing fight</h3>
        <button>
          <a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=bb19fa2a41a21&mfid=1558582688970_bb19fa2a41a21#/checkout/openButton">
            Donate
          </a>
        </button>
      </div>
    </section>
  )
}

export default CTA
