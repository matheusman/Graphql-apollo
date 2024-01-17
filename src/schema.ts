import { gql } from 'apollo-server';
import { userTypeDefs } from './graphql/user/userTypeDefs';
import { userResolvers } from './graphql/user/userResolvers';
import { postTypeDefs } from './graphql/posts/postTypeDefs';
import { postResolvers } from './graphql/posts/postResolvers';
import { apiFilterTypeDefs } from './graphql/api-filter/apiFilterTypeDefs';
import { apiFilterResolvers } from './graphql/api-filter/apiFilterResolvers';

const rootTypeDefs = gql`
	type Query {
		_isEmpty: Boolean!
	}

  type Mutation {
    _isEmpty: Boolean!
  }
`;

const rootResolvers = {
	Query: {
		_isEmpty: () => true,
  },
  Mutation: {
    _isEmpty: () => true,
  }
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFilterTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers, apiFilterResolvers];
