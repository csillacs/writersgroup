import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./hero.module.css";

export default function Hero() {
  const { contentfulHeroImage } = useStaticQuery(graphql`
    query HeroImageQuery {
      contentfulHeroImage(name: { eq: "helsinki" }) {
        name
        heroImage {
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
        alt={contentfulHeroImage.name}
        fluid={contentfulHeroImage.heroImage.fluid}
      />
      <div className={styles.heroDetails}>
        <h1 className={styles.heroHeadline}>Helsinki Writers' Group</h1>
        {/* <p className={styles.heroText}>
          A group of English-language creative writers based in Helsinki we
          meet every Friday to share work and talk about the writing craft.
        </p> */}
        <button className={styles.heroButton}>
          <a
            href="https://www.facebook.com/helsinkiwritersgroup/events/?ref=page_internal"
            target="_blank"
            rel="noreferrer"
          >
            Join us!
          </a>
        </button>
      </div>
    </div>
  );
}
