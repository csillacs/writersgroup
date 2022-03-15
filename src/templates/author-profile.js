import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/layout";
import heroStyles from "../components/hero.module.css";
import Hero from "../components/hero";

import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export default function AuthorProfile({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.contentfulPerson;
  const posts = data.allContentfulBlogPost.edges;
  const publications = data.allContentfulPublication;

  return (
    <Layout location={location}>
      {/* <Layout location={this.props.location}> */}
      <Helmet title={`${author.name} | ${siteTitle}`} />
      <div className={heroStyles.hero}>
        <Hero />
      </div>
      <div className="wrapper text-base md:text-lg md:leading-relaxed whitespace-pre-line">
        <h1 className="section-headline">{author.name}</h1>
        <div>
          <div className="md:float-right md:w-2/5 md:pl-10">
            {author.image ? (
              <Img alt={author.name} fluid={author.image.fluid} />
            ) : (
              <></>
            )}
          </div>
          <h3 className="py-5"> Bio:</h3>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: author.shortBio.childMarkdownRemark.html,
            }}
          />
          <p>Member since: {author.memberSince}</p>

          {author.facebook || author.twitter || author.instagram ? (
            <h3 className="py-5">Social media:</h3>
          ) : (
            <></>
          )}

          <div className="flex transition duration-300 ease-in-out text-3xl">
            {author.facebook ? (
              <Link
                to={`${author.facebook}`}
                className="pr-5"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                <FaFacebookSquare />{" "}
              </Link>
            ) : (
              <></>
            )}
            {author.twitter ? (
              <Link
                to={`${author.twitter}`}
                className="pr-5"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitter />
              </Link>
            ) : (
              <></>
            )}
            {author.instagram ? (
              <Link
                to={`${author.instagram}`}
                className="pr-5"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram />
              </Link>
            ) : (
              <></>
            )}
          </div>

          {author.blog ? <h3 className="py-5">Personal blog:</h3> : <></>}
          {author.blog ? (
            <p>
              <Link
                to={`${author.blog}`}
                className="cursor-pointer hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                {author.blog}{" "}
              </Link>
            </p>
          ) : (
            <></>
          )}

          {posts ? <h3 className="py-5">Posts: </h3> : <></>}

          <div>
            <ul>
              {posts.map(({ node }) => {
                return (
                  <li className="cursor-pointer hover:underline">
                    <Link to={`/blog/${node.slug}/`}>{node.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {publications ? <h3 className="py-5">Shop: </h3> : <></>}

          <div className="pb-20">
            <ul>
              {publications.edges.map(({ node }) => {
                return (
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={`${node.link}/`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {node.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const AuthorsProfileQuery = graphql`
  query AuthorBySlug($slug: String!) {
    allContentfulBlogPost(filter: { author: { slug: { eq: $slug } } }) {
      edges {
        node {
          slug
          title
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
    contentfulPerson(slug: { eq: $slug }) {
      name
      slug
      twitter
      instagram
      facebook
      blog
      active

      memberSince(formatString: "MMMM YYYY")

      image {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      shortBio {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPublication(
      filter: { author: { slug: { eq: $slug } } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id
          author {
            name
            slug
          }
          link
          name
        }
      }
    }
  }
`;
