import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import AuthorPreview from "../components/author-preview";

export default function FormerMembers() {
  const { allContentfulPerson } = useStaticQuery(graphql`
    query formerMembersQuery {
      allContentfulPerson(
        filter: { active: { eq: false } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `);

  return (
    <div>
      <h2 className="pt-10">Former members:</h2>
      <ul className="">
        {allContentfulPerson.edges.map(({ node }) => {
          return (
            <li key={node.slug}>
              <AuthorPreview author={node} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
