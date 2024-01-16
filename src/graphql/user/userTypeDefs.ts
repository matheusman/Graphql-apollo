import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): UserResult!
    users(input: ApiFilterInput): [User!]!
  }

  union UserResult = User | TypeError

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    # posts: [Post!]!
  }

  type TypeError {
    statusCode: Int!
    message: String!
  }
`;

// "id": "602",
//     "firstName": "Elisa",
//     "lastName": "Pereira",
//     "userName": "elisa.pereira",
//     "indexRef": 17,
//     "createdAt": "2017-02-15T11:29:40.799Z"
