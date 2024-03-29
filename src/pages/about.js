import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AboutContent from "../components/about-content";
// import FacebookEvents from "../components/facebook-events";
import { graphql } from "gatsby";

export default function About({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <Hero />
      <div className="wrapper">
        <h2 className="section-headline">About us</h2>
        <div class="lg:flex">
          <AboutContent />
          <div className="lg:pt-20 lg:ml-10">
            {/* <FacebookEvents /> */}
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
