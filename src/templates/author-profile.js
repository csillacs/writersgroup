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
      <div style={{ background: "#fff" }}>
        <Helmet title={`${author.name} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Hero />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{author.name}</h1>
          <fieldset>
            <div className=" float-right w-1/3 pl-10	">
              {author.image ? (
                <Img alt={author.name} fluid={author.image.fluid} />
              ) : (
                <div className="hidden" />
              )}
            </div>

            <h3> Bio:</h3>
            <div
              className="text-justify leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: author.shortBio.childMarkdownRemark.html,
              }}
            />
            <p>Member since: {author.memberSince}</p>
            <h3>Social media:</h3>
            <p>Facebook: {author.facebook ? author.facebook : "n/a"}</p>
            <p>Twitter: {author.twitter ? author.twitter : "n/a"}</p>
            <p>Instagram: {author.instagram ? author.instagram : "n/a"}</p>

            <h3>Posts: </h3>
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

            <h3>Shop: </h3>
            {/* {publications.link ? (
              <div>
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
            ) : (
              <p>n/a</p>
            )} */}

            <div>
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
          </fieldset>
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
      email
      twitter
      instagram
      facebook
      active

      memberSince(formatString: "MMMM Do, YYYY")

      image {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
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
