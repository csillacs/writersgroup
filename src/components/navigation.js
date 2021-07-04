import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

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
      <li className={styles.navigationItem}>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className={styles.darkButton}>
              <input
                type="checkbox"
                id="toggle"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
              />
              <label for="toggle"></label>
            </div>
          )}
        </ThemeToggler>
      </li>
    </ul>
  </nav>
);
