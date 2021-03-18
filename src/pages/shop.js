import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";
import BookPreview from "../components/book-preview";

import { graphql } from "gatsby";

export default function Shop({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const books = data.allContentfulPublication.edges;

  return (
    <Layout location={location}>
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Hero />

        <div className="wrapper">
          <h2 className="section-headline">Shop</h2>

          <ul className="list">
            {books.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <BookPreview books={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export const shopPageQuery = graphql`
  query ShopPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPublication(sort: { fields: author___name, order: ASC }) {
      edges {
        node {
          author {
            name
            slug
          }
          name
          link
          image {
            fluid(maxWidth: 180, maxHeight: 240, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
