import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default ({ article }) => (
  <div className="text-justify">
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className="pt-1 text-2xl">
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>
      {article.publishDate} | {article.author.name}
    </small>

    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
);
