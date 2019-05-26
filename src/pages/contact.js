//Modules
import React, { useState } from "react"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
//Sass
import styles from "./styles/ContactPage.module.scss"

const ContactPage = () => {
  const [formData, updateFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

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
        // onSubmit={e => {
        //   e.preventDefault()
        //   if (
        //     formData.firstName &&
        //     formData.firstName &&
        //     formData.email &&
        //     formData.message
        //   ) {
        //     console.log(formData)
        //   }
        //   updateFormData({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     phone: "",
        //     message: "",
        //   })
        // }}
      >
        <div>
          <h1>Contact Us:</h1>
        </div>

        <div>
          <label htmlFor="firstName">* First Name</label>
          <input
            name="first-name"
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={e => {
              updateFormData({
                ...formData,
                firstName: e.target.value,
              })
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">* Last Name</label>
          <input
            name="last-name"
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={e => {
              updateFormData({
                ...formData,
                lastName: e.target.value,
              })
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="email">* Email</label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={e => {
              updateFormData({
                ...formData,
                email: e.target.value,
              })
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            type="number"
            id="phone"
            value={formData.phone}
            onChange={e => {
              updateFormData({
                ...formData,
                phone: e.target.value,
              })
            }}
          />
        </div>

        <div>
          <label htmlFor="message">* Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={e => {
              updateFormData({
                ...formData,
                message: e.target.value,
              })
            }}
          />
        </div>

        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <button className={styles.Submit}>Submit</button>
      </form>
    </Layout>
  )
}

export default ContactPage
