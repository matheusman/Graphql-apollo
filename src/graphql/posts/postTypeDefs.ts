import { gql } from 'apollo-server';

export const postTypeDefs = gql`
	extend type Query {
		post(id: ID!): Post!
		posts(input: ApiFilterInput): [Post!]!
		# user: User!
	}

	type Post {
		id: ID!
		title: String!
		body: String!
		userId: String!
		indexRef: Int!
		createdAt: String!
	}
`;
