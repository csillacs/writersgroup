import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Fiction from "../components/fiction-content";

export default function BlogFiction({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Hero />

        <div className="pt-14 text-center text-lg md:text-3xl">
          <Link to="/blog" className="hover:underline">
            {" "}
            All posts{" "}
          </Link>
          /
          <Link to="/poetry" className="hover:underline">
            {" "}
            Poetry{" "}
          </Link>{" "}
          /{" "}
          <Link to="/fiction" className="hover:underline text-3xl md:text-5xl">
            {" "}
            Fiction{" "}
          </Link>{" "}
          /
          <Link to="/non-fiction" className="hover:underline">
            {" "}
            Non-fiction{" "}
          </Link>
        </div>
        <div className="wrapper">
          <Fiction />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogFictionQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
