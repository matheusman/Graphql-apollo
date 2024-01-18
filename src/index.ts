import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './schema';
import { context } from './graphql/context/context';
import 'dotenv/config';
import { dataSources } from './graphql/datasources/dataSources';

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
  dataSources: () => {
    return {
      ...dataSources
    }
  }
});

