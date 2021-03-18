import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import IndexContent from "../components/index-content";
import General from "../components/general-content";

export default function RootIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Hero />
        <div className="wrapper">
          <div className="pb-24	">
            <IndexContent />
          </div>
          <General />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
