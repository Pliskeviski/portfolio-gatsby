module.exports = {
  siteMetadata: {
    siteUrl: "https://www.pliskeviski.com",
    title: "Pliskeviski",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-6MZ84F6M6Q",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gustavo Pliskeviski - Portfolio",
        icon: "src/images/icon.jpg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "@sections": "src/sections",
          "@utils": "src/utils",
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Nunito:700,800", "Poppins:500,700"],
        display: "swap",
      },
    },
  ],
};
