require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `learn-at-most-capacity`,
    siteUrl: `https://www.yourdomain.tld`,
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
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
