require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    author: `@sidm1983`,
    siteDescription: `A blog by Sid Mansukhani, a Melbourne-based developer, tech enthusiast, aspiring photographer, father & husband.`,
    siteHeadline: `Sid Mansukhani's Blog`,
    siteImage: `/android-chrome-512x512.png`,
    siteLanguage: `en`,
    siteTitle: `Sid Mansukhani`,
    siteTitleAlt: `Sid Mansukhani's Blog`,
    siteUrl: `https://sidman.dev`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`
          },
          {
            title: `Blog`,
            slug: `/blog`
          }
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/sidm1983`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/sidmandev`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/sidm1983/`,
          },
        ],
        feedTitle: `Sid Mansukhani's Blog`,
        formatString: `DD/MM/YYYY`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sid Mansukhani's blog`,
        short_name: `sid-man-blog`,
        description: `A blog by Sid Mansukhani, a Melbourne-based developer, tech enthusiast, aspiring photographer, father & husband.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
