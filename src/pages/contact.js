//Modules
import React from "react"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
//Sass
import styles from "./styles/ContactPage.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sang Foundation : Contact Us</title>
      </Helmet>

      <form
        className={styles.ContactForm}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <div>
          <h1>Contact Us:</h1>
        </div>

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

        <div>
          <label htmlFor="message">* Message</label>
          <textarea id="message" name="message" />
        </div>

        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <button className={styles.Submit}>Submit</button>
      </form>
    </Layout>
  )
}

export default ContactPage
