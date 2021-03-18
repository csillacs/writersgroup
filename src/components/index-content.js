import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
    // <div className=" md:bg-gray-100 md:shadow-2xl ">
    // <div className="pt-20 md:p-14 text-lg sm:text-xl  ">
    <div>
      <div className="text-xl sm:text-3xl ">
        {/* <div className="text-base sm:text-lg "> */}
        {/* lg:text-xl md:text-xl sm:text-lg xs:text-sm */}
        <div
          className="pt-14 text-justify whitespace-pre-line text-gray-500 leading-relaxed 	"
          dangerouslySetInnerHTML={{
            __html: contentfulComponent.body.childMarkdownRemark.html,
          }}
        />
        <div className=" text-center cursor-pointer hover:underline pt-5">
          <a href="https://www.facebook.com/helsinkiwritersgroup/events/?ref=page_internal">
            Join us!{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
