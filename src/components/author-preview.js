import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import heroImage from "../components/heroImage";
import styles from "./author-preview.module.css";

export default ({ author }) => (
  <div className={styles.preview}>
    {/* <Img alt="" fluid={author.image.fluid} /> */}
    {/* {author.image ? (
      <Img alt={author.name} fluid={author.image.fluid} />
    ) : (
      <heroImage />
    )} */}

    <h3 className={styles.previewTitle}>
      <Link to={`/authors/${author.slug}`}>{author.name}</Link>
    </h3>

    <small>{author.title}</small>
  </div>
);
