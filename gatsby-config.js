/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    name: `Sự kiện hàng năm`,
    author: `Phong Do`,
    title: `Sự kiện hàng năm của Phong`,
    description: `Danh sách tổng hợp các sự kiện trong năm của Phong, sử dụng Google Sheets làm CSDL`,
    keywords: `gatsby, events, learning, demo, google sheets`,
    url: "https://mrtuanphong.github.io/myevents", // No trailing slash allowed!
    image: "/assets/images/fb-sharing.jpg", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: `/myevents`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
  ],
}