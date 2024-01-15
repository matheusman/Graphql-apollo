import { gql } from "apollo-server";
import { userTypeDefs } from "./graphql/user/userTypeDefs";
import { userResolvers } from "./graphql/user/userResolvers";
import { postTypeDefs } from "./graphql/posts/postTypeDefs";
import { postResolvers } from "./graphql/posts/postResolvers";

const rootTypeDefs = gql`
  type Query {
    _isEmpty: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _isEmpty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs]
export const resolvers = [rootResolvers, userResolvers, postResolvers]
