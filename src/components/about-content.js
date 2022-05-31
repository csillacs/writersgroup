import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default function AboutContent() {
  // const contentfulAboutContent = something.contentfulAboutContent
  // const {contentfulAboutContent: myVariable} = something
  const { contentfulComponent } = useStaticQuery(graphql`
    query aboutContentQuery {
      contentfulComponent(name: { eq: "AboutContent" }) {
        id
        publishDate(formatString: "MMMM Do, YYYY")
        author {
          name
          slug
        }
        image {
          file {
            fileName
          }
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
  `);

  return (
    <div className="">
      <p
        style={{
          display: "block",
        }}
      >
        {" "}
        <b>
          {contentfulComponent.publishDate} |{" "}
          <Link to={`/authors/${contentfulComponent.author.slug}`}>
            {contentfulComponent.author.name}
          </Link>
        </b>
      </p>
      <small>
        {" "}
        Time to read: {
          contentfulComponent.body.childMarkdownRemark.timeToRead
        }{" "}
        mins
      </small>

      {contentfulComponent.image ? (
        <div className="md:px-20 pb-10 pt-20">
          <Img
            alt={contentfulComponent.image.filename}
            fluid={contentfulComponent.image.fluid}
          />
        </div>
      ) : (
        <></>
      )}

      <div
        className="py-10 leading-relaxed whitespace-pre-line text-base md:text-lg"
        dangerouslySetInnerHTML={{
          __html: contentfulComponent.body.childMarkdownRemark.html,
        }}
      />
    </div>
  );
}
