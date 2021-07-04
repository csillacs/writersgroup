import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Poetry from "../components/poetry-content";

export default function BlogPoetry({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <Hero />

      <div className="pt-14 text-center text-lg md:text-3xl">
        <Link to="/blog" className="hover:underline">
          {" "}
          All posts{" "}
        </Link>
        /
        <Link to="/poetry" className="hover:underline text-3xl md:text-5xl">
          {" "}
          Poetry{" "}
        </Link>{" "}
        /{" "}
        <Link to="/fiction" className="hover:underline ">
          {" "}
          Fiction{" "}
        </Link>{" "}
        /
        <Link to="/non-fiction" className="hover:underline ">
          {" "}
          Non-fiction{" "}
        </Link>
      </div>
      <div className="wrapper">
        <Poetry />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPoetryQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
