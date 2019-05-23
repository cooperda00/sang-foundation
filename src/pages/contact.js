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
        onSubmit={e => {
          e.preventDefault()
          if (
            formData.firstName &&
            formData.firstName &&
            formData.email &&
            formData.message
          ) {
            console.log(formData)
          }
          updateFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          })
        }}
      >
        <div>
          <h1>Contact Us:</h1>
        </div>

        <div>
          <label htmlFor="firstName">* First Name</label>
          <input
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
            value={formData.message}
            onChange={e => {
              updateFormData({
                ...formData,
                message: e.target.value,
              })
            }}
          />
        </div>

        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default ContactPage
