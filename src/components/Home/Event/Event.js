//Modules
import React from "react"
//Sass
import styles from "./Event.module.scss"
//Images
import flyer from "../../../images/WODflyer.jpg"

const Event = () => {
  return (
    <section className={styles.Event}>
      <img src={flyer} alt="World Ocean's Day Event" className={styles.Flyer} />

      <h1>World Oceans Day Bangkok 2019</h1>
      <p>
        A public awareness family event celebrating World Oceans Day. Hosted by
        Sang Foundation & partners Precious Plastic, Grin Green International,
        Eco Beasts and Trash Hero.
      </p>
      <p>
        Featuring educational presentations, workshops, demos, documentary
        viewings, music, dancers, children's activites, food and beverages and a
        raffle!
      </p>
      <p>Participation Fee: min 100 Baht suggested donation per person</p>

      <div className={styles.EventCTA}>
        <h3>Visit the Facebook event page to learn more</h3>
        <button>
          <a href="https://www.facebook.com/events/418916045594803/?active_tab=about">
            Learn More
          </a>
        </button>
      </div>
    </section>
  )
}

export default Event
