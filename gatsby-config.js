require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Intro of Jemish`,
    siteUrl: `https://luminous-daifuku-eb99fa.netlify.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `details`,
        path: `${__dirname}/details`,
      },
    },
    {
      resolve: `gatsby-source-custom-api`,
      options: {
        apiKey: process.env.API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.ico`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
