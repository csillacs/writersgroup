import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./hero.module.css";

export default function Hero() {
  const { contentfulComponent } = useStaticQuery(graphql`
    query {
      contentfulComponent(name: { eq: "HeroBlock" }) {
        body {
          childMarkdownRemark {
            id
            rawMarkdownBody
          }
        }
        id
        image {
          id
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
  `);

  return (
    <div className={styles.hero}>
      <Img
        className={styles.heroImage}
        alt={contentfulComponent.name}
        fluid={contentfulComponent.image.fluid}
      />
      <div className={styles.heroDetails}>
        <h1 className={styles.heroHeadline}>
          {contentfulComponent.body.childMarkdownRemark.rawMarkdownBody}
        </h1>

        {/* <button className={styles.heroButton}>
          <a
          href="https://www.facebook.com/helsinkiwritersgroup/events/?ref=page_internal"
          target="_blank"
          rel="noreferrer"
          >
          Join us!
          </a>
        </button> */}
        <p className="text-sm pb-20 pt-10 text-center tracking-wide">
          {" "}
          ESTABLISHED IN 2008
        </p>
      </div>
    </div>
  );
}
