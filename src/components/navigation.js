import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/authors">Authors</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/shop">Shop</Link>
      </li>
    </ul>
  </nav>
);
