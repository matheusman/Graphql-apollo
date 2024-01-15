import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user: User!
  }

  type User {
    id: ID!
    name: String!
  }
`;
