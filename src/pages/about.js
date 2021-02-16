import React from "react";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import styles from "./blog.module.css";
import Layout from "../components/layout";

export default function About() {
  const siteTitle = get(this, "props.data.site.siteMetadata.title");

  return (
    <Layout>
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>About us</div>
        <div className="wrapper">
          <h2 className="section-headline">About us</h2>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhelsinkiwritersgroup%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
            width="340"
            height="500"
            className="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          {/* <h1>I'd love to talk! Email me at the address below</h1>
          <p>
            <a href="mailto:me@example.com">me@example.com</a>
          </p> */}
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

    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
