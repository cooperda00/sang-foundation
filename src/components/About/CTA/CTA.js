//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./CTA.module.scss"
//Images
import volunteer from "../../../images/volunteer1.jpeg"
import protestGroup from "../../../images/protestgroup.jpeg"

const CTA = () => {
  return (
    <section className={styles.CTA}>
      <div>
        <img src={protestGroup} alt="Young people protesting" />
        <h3>Want to get in touch with us directly?</h3>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </div>

      <div>
        <img
          src={volunteer}
          alt="Volunteer and help us run workshops"
          className={styles.Test}
        />
        <h3>Start acting now and become a volunteer</h3>
        <button>
          <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">Join Us</a>
        </button>
      </div>
    </section>
  )
}

export default CTA
