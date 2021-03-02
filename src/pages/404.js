import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";

import { graphql } from "gatsby";

export default function PageNotFound({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Hero />

        <div className="wrapper">
          <h2 className="section-headline">Ooops!</h2>
          <div className="py-20 text-justify leading-relaxed text-2xl">
            Sorry, the page you were looking for could not be found.
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const PageNotFoundQuery = graphql`
  query APageNotFoundQueryQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
