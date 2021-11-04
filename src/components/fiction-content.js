import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArticlePreview from "./article-preview";

export default function Fiction() {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query fictionQuery {
      allContentfulBlogPost(
        filter: { tags: { eq: "fiction" } }
        sort: { fields: publishDate, order: DESC }
      ) {
        edges {
          node {
            id
            author {
              name
              slug
            }
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            heroImage {
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
            }
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="">
      <h2 className="section-headline">{/* Fiction */}</h2>

      <ul className="list">
        {allContentfulBlogPost.edges.map(({ node }) => {
          return (
            <li key={node.slug}>
              <ArticlePreview article={node} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
