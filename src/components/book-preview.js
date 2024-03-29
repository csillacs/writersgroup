import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default ({ books }) => (
  <div className="text-left text-base md:text-lg p-2 pb-10  ">
    <Img alt="" fluid={books.image.fluid} />
    <Link
      to={`/authors/${books.author.slug}`}
      className="hover:text-gray-600 hover:underline "
    >
      {books.author.name}
    </Link>{" "}
    :
    <p className="hover:text-gray-600 hover:underline ">
      <a href={books.link} target="_blank" rel="noreferrer">
        {" "}
        {books.name}
      </a>
    </p>
  </div>
);
