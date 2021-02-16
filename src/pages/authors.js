import React from "react";
import { graphql } from "gatsby";

import get from "lodash/get";
import { Helmet } from "react-helmet";
import styles from "./blog.module.css";
import Layout from "../components/layout";
import AuthorPreview from "../components/author-preview";

class Authors extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const authors = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Authors</div>
          <div className="wrapper">
            <h2 className="section-headline">Authors</h2>
            <ul className="list">
              {authors.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <AuthorPreview author={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Authors;

export const AuthorsQuery = graphql`
  query AuthorsQuery {
    allContentfulPerson(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          title
          slug
          shortBio {
            childMarkdownRemark {
              html
            }
          }
          email
          instagram
          twitter
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
