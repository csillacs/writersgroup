import React from "react";
import { Helmet } from "react-helmet";
// import styles from "./blog.module.css";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AboutContent from "../components/about-content";
import FacebookEvents from "../components/facebook-events";

import { graphql } from "gatsby";

export default function About({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Hero />

        <div className="wrapper">
          <h2 className="section-headline">About us</h2>
          <fieldset className="">
            <div className="lg:float-left  lg:w-2/3 ">
              <AboutContent />
            </div>
            <div className="lg:float-right lg:w-1/3 pl-10">
              <FacebookEvents />
            </div>
          </fieldset>
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
