import React from "react";
import { Link } from "gatsby";

export default ({ author }) => (
  <div>
    <p className=" text-lg p-2  hover:text-gray-600 hover:underline ">
      <Link to={`/authors/${author.slug}`}>{author.name}</Link>
    </p>
  </div>
);
