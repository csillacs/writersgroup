import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function AboutContent() {
  // const contentfulAboutContent = something.contentfulAboutContent
  // const {contentfulAboutContent: myVariable} = something
  const { contentfulComponent } = useStaticQuery(graphql`
    query indexContentQuery {
      contentfulComponent(name: { eq: "IndexContent" }) {
        id
        publishDate(formatString: "MMMM Do, YYYY")
        author {
          name
          slug
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
      <div
        className=" text-justify leading-relaxed text-2xl"
        dangerouslySetInnerHTML={{
          __html: contentfulComponent.body.childMarkdownRemark.html,
        }}
      />
      <Link
        to={`/about`}
        className=" float-right text-2xl cursor-pointer hover:underline "
      >
        Read more...{" "}
      </Link>
    </div>
  );
}
