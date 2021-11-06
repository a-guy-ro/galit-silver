module.exports = {
  siteMetadata: {
    title: "Galit Silver",
    description: "Galit Silver's portfolio website - האתר של האמנית גלית סילבר",
    siteUrl:"https://galitsilver.com",
    instagramUserName: "@galit.amalia",
    email: "silvergalit@gmail.com",
    keywords: "artist, sculpture, installation, Israel, Tel-Aviv, clay, felt wool, גלית סילבר, אמנית, אמנות, תל-אביב, ישראל, אמנות עכשווית",
    siteMap: 'http://galitsilver.com/sitemap.xml',
    menuItems: [
      {
        title: "Posts",
        slug: "posts",
        id: "post",
      }
    ]
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    'gatsby-plugin-netlify-cache',
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
        sitemap: "https://galitsilver.com/sitemap.xml",
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: "https://live-galitsilver.pantheonsite.io/",
      }

    },
    "gatsby-plugin-advanced-sitemap",
  ],
}
