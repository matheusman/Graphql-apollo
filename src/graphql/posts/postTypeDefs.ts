import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
  }

  type Post {
    id: ID!
    title: String!
  }
`;
