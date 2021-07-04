require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Helsinki Writers Group",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-readingtime-contentful",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `writersgroup`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries: require("./src/utils/algolia-queries"),
    //   },
    // },
    {
      resolve: `gatsby-plugin-pinterest-twitter-facebook`,
      options: {
        facebook: {
          // Set this to false if you want to disable facebook
          enable: true, // default
          // Set this to the querySelector string of the container element where you want to display facebook timeline and like button
          // If you do not define this, facebook timeline and like button will not work
          // Fox example: `.facebook-container` or `#.facebook-timeline`
          containerSelector: null,
          // Set this to the facebook profile or facebook page name you want to use
          // If you do not define this, facebook timeline and like button will not work
          // Do not include `@` symbol here
          profile: null, // default
          // The pixel width of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 180 and Maximum allowed value is 500
          // If you leave this as null, the plugin will try to occupy all available container width
          width: null, // default
          // The pixel height of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 70
          // If you leave this as null, the plugin will try to occupy all available container height
          height: null, // default
          // Tabs to render i.e. timeline, events, messages. Use a comma-separated list to add multiple tabs, i.e. timeline, events.
          tabs: "timeline, events, messages", // default
          // Hide cover photo in the header
          hideCover: false, // default
          // Show profile photos when friends like this, i.e. if you are logged in to Facebook, it will show the photos of your friends who have liked this page
          showFacepile: true, // default
          // Use the small header instead, i.e show a smaller cover photo
          smallHeader: false, // default
          // Try to fit inside the container width on page load
          // If the width of the parent element is bigger than the Page plugin's width it will maintain the value defined in width
          // No Dynamic Resizing - If you want to adjust the plugin's width on window resize, you manually need to rerender the plugin.
          adaptContainerWidth: true, // default
        },
      },
    },
  ],
};
