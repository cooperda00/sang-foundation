//Modules
import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
//Logo
import logo from "../../images/logo-old-compressor.png"

const SEO = props => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  const { image, siteUrl } = siteMetadata

  return (
    <Helmet
      title={props.title}
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${logo}` },
      ]}
    >
      <meta name="keywords" content={props.keywords} />
      <meta name="description" content={props.description} />
      <meta name="image" content={image} />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      {/* FACEBOOK */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        image
      }
    }
  }
`

export default SEO
