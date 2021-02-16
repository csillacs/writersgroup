import React from "react";
import { graphql } from "gatsby";

// const AuthorsPosts = () => (
//   <StaticQuery
//     export const
//     AuthorsPostsQuery={graphql`
//       query PostsByPerson($slug: String!) {
//         contentfulPerson(slug: { eq: $slug }) {
//           posts {
//             title
//           }
//         }
//       }
//     `}
//     render={(data) => (
//       <div className="authors-posts">
//         {data.allContentfulPerson.edges.map(({ node }, i) => (
//           <div class="posts" key={i}>
//             {node.posts.map((post) => (
//               <div>{post}</div>
//             ))}
//           </div>
//         ))}
//       </div>
//     )}
//   />
// );

const AuthorsPosts = ({ author }) => {
  return (
    <div>
      {author.posts.edges.map(({ node }) => (
        <p>{node.title}</p>
      ))}
    </div>
  );
};
export default AuthorsPosts;

export const AuthorsPostsQuery = graphql`
  query AuthorsPosts($slug: String!) {
    contentfulPerson(slug: { eq: $slug }) {
      name
      posts {
        title
      }
    }
  }
`;
