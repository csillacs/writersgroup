import React from "react";
import { Helmet } from "react-helmet";
// import styles from "./blog.module.css";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AboutContent from "../components/about-content";
import FacebookEvents from "../components/facebook-events";

import { graphql } from "gatsby";

export default function About({ data }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Hero />

        <div className="wrapper">
          <h2 className="section-headline">About us</h2>

          <AboutContent />
          <div className="py-20 m:auto">
            <FacebookEvents />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const AboutUsQuery = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
