const escapeStringRegexp = require("escape-string-regexp");
const pagePath = `content`;
const indexName = `Pages`;

const pageQuery = `
    {
        allContentfulPage {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
`;
const personQuery = `
    {
        allContentfulPerson {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;
const blogPostQuery = `
    {
        allContentfulBlogPost {
            edges {
                node {
                    id
                    title
                    body {
                      childMarkdownRemark {
                        html
                      }
                    }
                }
            }
        }
    }
`;
function pageToAlgoliaRecord({ node }) {
  const { id, title } = node;

  return {
    objectID: id,
    title,
  };
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.allContentfulPage.edges.map((edge) => pageToAlgoliaRecord(edge)),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: blogPostQuery,
    transformer: ({ data }) =>
      data.allContentfulBlogPost.edges.map((edge) => pageToAlgoliaRecord(edge)),
    // transformer: () => {}, // TODO
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: personQuery,
    transformer: ({ data }) =>
      data.allContentfulPerson.edges.map((edge) => pageToAlgoliaRecord(edge)),
    // transformer: () => {}, // TODO
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];
module.exports = queries;
