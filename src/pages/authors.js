import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AuthorPreview from "../components/author-preview";
import FormerMembers from "../components/former-members";

export default function Authors({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const authors = data.allContentfulPerson.edges;

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <Hero />
      <div className="wrapper text-base md:text-lg">
        <h2 className="section-headline">Authors</h2>
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
    </Layout>
  );
}

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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
