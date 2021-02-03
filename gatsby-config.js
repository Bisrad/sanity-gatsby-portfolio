// import dotenv from 'dotenv'

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dev_Bread`,
    description: `Dev portfolio showcasing Gatsby using Sanity and Netlify`,
    author: `Brad Thompson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // resolve: `gatsby-source-github-api`,
      // options: {
      // token: required by the GitHub API
      // token:  {dotenv.GH_TOKEN} ,

      // GraphQLquery: defaults to a search query
      // graphQLQuery: anotherString,

      // variables: defaults to variables needed for a search query
      // variables: someObject,
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#11202E`,
        theme_color: `#06BDD6`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
