import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/layout";
import heroStyles from "../components/hero.module.css";
import Hero from "../components/hero";

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
      <div className="wrapper ">
        <h1 className="section-headline">{author.name}</h1>
        <div>
          <div className="md:float-right md:w-2/5 md:pl-10">
            {author.image ? (
              <Img alt={author.name} fluid={author.image.fluid} />
            ) : (
              <></>
            )}
          </div>

          <h3> Bio:</h3>
          <div
            className="leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: author.shortBio.childMarkdownRemark.html,
            }}
          />
          <p>Member since: {author.memberSince}</p>

          {author.facebook || author.twitter || author.instagram ? (
            <h3 className="pt-5">Social media:</h3>
          ) : (
            <></>
          )}
          {author.facebook ? <p>Facebook: {author.facebook} </p> : <></>}
          {author.twitter ? <p>Twitter: {author.twitter} </p> : <></>}
          {author.instagram ? <p>Instagram: {author.instagram} </p> : <></>}

          {posts ? <h3 className="pt-5">Posts: </h3> : <></>}

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

          {publications ? <h3 className="pt-5">Shop: </h3> : <></>}

          <div className="pb-20">
            <ul>
              {publications.edges.map(({ node }) => {
                return (
                  <li className="cursor-pointer hover:underline">
                    <Link to={`${node.link}/`} target="_blank">
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
