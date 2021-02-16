// const Promise = require("bluebird");
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostQuery = graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}/`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.slug,
        },
      });
    });
  });

  const AuthorsQuery = graphql(`
    query {
      allContentfulPerson {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulHeroImage {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then((result) => {
    result.data.allContentfulPerson.edges.forEach(({ node }) => {
      console.log(node.slug);
    });
    result.data.allContentfulPerson.edges.forEach(({ node }) => {
      createPage({
        path: `/authors/${node.slug}/`,
        component: path.resolve("./src/templates/author-profile.js"),
        context: {
          slug: node.slug,
        },
      });
    });
  });

  return Promise.all([blogPostQuery, AuthorsQuery]);
};
