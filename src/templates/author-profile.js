import React from "react";
import { graphql } from "gatsby";
// import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";
import heroStyles from "../components/hero.module.css";
import heroImage from "../components/heroImage";
import AuthorsPosts from "../components/authors-posts";

class AuthorProfile extends React.Component {
  render() {
    const author = get(this.props, "data.contentfulPerson");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={`${author.name} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            {/* {author && author.name} */}
            {/* {author.nickname ? author.nickname : "Anonymous"} */}

            {author.image ? (
              <Img
                className={heroStyles.heroImage}
                alt={author.name}
                fluid={author.image.fluid}
              />
            ) : (
              // <Img
              //   className={heroStyles.heroImage}
              //   alt={author.name}
              //   fluid={author.image.fluid}
              // />
              <heroImage />
            )}
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{author.name}</h1>
            <p
              style={{
                display: "block",
              }}
            >
              <small>{author.title}</small>
            </p>
            <p> Bio:</p>
            <div
              className="py-0"
              dangerouslySetInnerHTML={{
                __html: author.shortBio.childMarkdownRemark.html,
              }}
            />
            <p>Email: {author.email} </p>
            <p>Twitter: {author.twitter}</p>
            <p>Instagram:{author.instagram}</p>
            <p>Latest posts: </p>

            {/* <div>
              <ul className="list">
                {author.posts.map(({ node }) => {
                  return console.log(author.posts);
                })}
              </ul>
            </div> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default AuthorProfile;

export const AuthorsProfileQuery = graphql`
  query AuthorBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPerson(slug: { eq: $slug }) {
      name
      title
      slug
      email
      twitter
      instagram
      posts {
        title
      }
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
  }
`;
