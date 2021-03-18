import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";
import NonFiction from "../components/non-fiction-content";

export default function BlogNonFiction({ data, location }) {
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
          <Link to="/fiction" className="hover:underline ">
            {" "}
            Fiction{" "}
          </Link>{" "}
          /
          <Link
            to="/non-fiction"
            className="hover:underline text-3xl md:text-5xl"
          >
            {" "}
            Non-fiction{" "}
          </Link>
        </div>
        <div className="wrapper">
          <NonFiction />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogNonFictionQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
