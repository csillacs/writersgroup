import React from "react";
import { Helmet } from "react-helmet";
// import styles from "./blog.module.css";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";

export default function Contact({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <Hero />
      <div className="wrapper">
        <h2 className="section-headline">Contact us</h2>
        <ContactForm />
      </div>
    </Layout>
  );
}

export const ContactPageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
