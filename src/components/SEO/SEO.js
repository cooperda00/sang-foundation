//Modules
import React from "react"
import Helmet from "react-helmet"
//Logo
import logo from "../../images/logo-old-compressor.png"

const SEO = props => {
  return (
    <Helmet
      title={props.title}
      meta={[
        {
          name: "description",
          content: props.description,
        },
        {
          name: "keywords",
          content: props.keywords,
        },
      ]}
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${logo}` },
      ]}
    />
  )
}

export default SEO
