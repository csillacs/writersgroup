import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query heroImgQuery {
          allContentfulHeroImage {
            edges {
              node {
                id
                heroImage {
                  fluid(maxWidth: 1180, background: "rgb:000000") {
                    ...GatsbyContentfulFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={styles.hero}>
          <Img
            className={styles.heroImage}
            alt={data.name}
            fluid={data.heroImage.fluid}
          />
        </div>
      )}
    />
  );
}

// export default ({ data }) => (
//   <div className={styles.hero}>
//     <Img
//       className={<Img
//       className={styles.heroImage}
//       alt={heroImage.name}
//       fluid={data.heroImage.fluid}
//     />
//       alt={heroImage.name}
//       fluid={data.heroImage.fluid}
//     />
//   </div>
// );

// const heroImgQuery = useStaticQuery(graphql`
//   query heroImgQuery {
//     allContentfulHeroImage {
//       edges {
//         node {
//           id
//           heroImage {
//             fluid(maxWidth: 1180, background: "rgb:000000") {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `);
