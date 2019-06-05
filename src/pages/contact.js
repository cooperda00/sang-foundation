//Modules
import React from "react"
import Fade from "react-reveal"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
//Sass
import styles from "./styles/ContactPage.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Sang Foundation : Contact Us"
        description={
          "Welcome to the Sang Foundation. Get in touch with us directly here."
        }
        keywords={"plastic, environment, waste, ocean, protect, contact"}
      />
      <Fade duration={1000}>
        <section className={styles.ContactContainer}>
          <h1 className={styles.Title}>Contact Us:</h1>
          <form
            className={styles.ContactForm}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.Left}>
              <div>
                <label htmlFor="firstName">* First Name</label>
                <input name="first-name" type="text" id="firstName" required />
              </div>

              <div>
                <label htmlFor="lastName">* Last Name</label>
                <input name="last-name" type="text" id="lastName" required />
              </div>

              <div>
                <label htmlFor="email">* Email</label>
                <input name="email" type="email" id="email" required />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input name="phone" type="number" id="phone" />
              </div>
            </div>

            <div className={styles.Right}>
              <div>
                <label htmlFor="message">* Message</label>
                <textarea id="message" name="message" />
              </div>

              <button className={styles.Submit}>Submit</button>
            </div>
          </form>
        </section>
      </Fade>
    </Layout>
  )
}

export default ContactPage
