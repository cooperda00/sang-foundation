module.exports = {
  siteMetadata: {
    title: `Sang Foundation`,
    description: `Striving to reduce plastic waste`,
    author: `danielcooper.io`,
    siteUrl: "https://sangfoundation.org",
    image: "/bobologo.jpg",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
  ],
}
