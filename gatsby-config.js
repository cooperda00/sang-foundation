module.exports = {
  siteMetadata: {
    title: `Sang Foundation`,
    description: `Striving to reduce plastic waste`,
    author: `danielcooper.io`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "http://sang-api.test",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
      },
      verboseOutput: false,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
