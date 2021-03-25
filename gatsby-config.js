module.exports = {
  siteMetadata: {
    title: "Galit Silver",
    description: "Website for the artist Galit Silver",
    siteUrl:"https://galitsilver.com",
    instagramUserName: "@galit.amalia",
    email: "silvergalit@gmail.com",
    keywords: "artist, sculpture, installation, Israel, Tel-Aviv",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    'gatsby-plugin-netlify-cache',
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "resources",
        path: "./src/resources/",
      },
      // __key: "images",
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://galitsilver.com",
        policy: [{ userAgent: '*', allow: '/' }],
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
        }`
      },
    },
  ],
}
