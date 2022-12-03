import { request, gql } from 'graphql-request';

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// console.log(graphqlAPI);
const graphqlAPI = "https://api-ap-northeast-1.hygraph.com/v2/clb7wn5ht0vtm01ta3i546ybl/master";


export const getPosts = async() => {
  const query = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          slug
          title
          createdAt
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  `
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
}
