import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/layout";
import heroStyles from "../components/hero.module.css";
import { DiscussionEmbed } from "disqus-react";

export default function BlogPostTemplate({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const post = data.contentfulBlogPost;
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.slug, post },
  };
  return (
    <Layout location={location}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <div className={heroStyles.hero}>
        <Img
          className={heroStyles.heroImage}
          alt={post.title}
          fluid={post.heroImage.fluid}
        />
      </div>

      <div className="wrapper dark:text-gray-300">
        <h1 className="section-headline">{post.title}</h1>
        <p
          style={{
            display: "block",
          }}
        >
          {" "}
          <b>
            {post.publishDate} |{" "}
            <Link
              to={`/authors/${post.author.slug}`}
              className="hover:underline"
            >
              {post.author.name}
            </Link>
          </b>
        </p>
        <small> {post.body.childMarkdownRemark.timeToRead} mins read</small>
        <div
          className="py-20 md:leading-relaxed whitespace-pre-line text-base md:text-lg md:px-20"
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />

        {post.postImage && post.postImage.map((image) => {
          return (
            <div className="md:px-20 pb-10">
              <Img alt="" fluid={image.fluid} />
            </div>
          );
        })}

        {post.publishedAt ? (
          <div>
            {" "}
            First published at:{" "}
            <a href={post.publishedAt} target="_blank" rel="noreferrer">
              {post.publishedAt}
            </a>
          </div>
        ) : (
          <></>
        )}

        <div className="py-20">
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      author {
        name
        slug
      }
      title
      publishDate(formatString: "MMMM Do, YYYY")
      publishedAt
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      postImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;
