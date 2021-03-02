import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import IndexContent from "../components/index-content";

class RootIndex extends React.Component {
  render() {
    // const siteTitle = data.site.siteMetadata.title;
    // const posts = data.allContentfulBlogPost.edges;
    // const [author] = data.allContentfulPerson.edges;

    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    // const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero />
          <div className="wrapper">
            <h2 className="section-headline">Who we are, what are we doing?</h2>
            <div className="pb-24	">
              <IndexContent />
            </div>
            <h2 className="section-headline">
              Before attending to your first workshop you might want to read
              these posts
            </h2>

            <ul className="list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      filter: { tags: { eq: "general" } }
      sort: { fields: publishDate, order: DESC }
    ) {
      edges {
        node {
          author {
            name
          }
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
