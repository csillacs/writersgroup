import React from "react";
import { graphql } from "gatsby";

import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";

import AuthorPreview from "../components/author-preview";
import FormerMembers from "../components/former-members";

class Authors extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const authors = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero />

          <div className="wrapper">
            <h2 className="section-headline">Authors</h2>
            {/* <ul className="list"> */}
            <ul className="">
              {authors.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <AuthorPreview author={node} />
                  </li>
                );
              })}
            </ul>

            <FormerMembers />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Authors;

export const AuthorsQuery = graphql`
  query AuthorsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson(
      sort: { fields: name, order: ASC }
      filter: { active: { eq: true } }
    ) {
      edges {
        node {
          name

          slug
          shortBio {
            childMarkdownRemark {
              html
            }
          }

          instagram
          twitter
          active
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
