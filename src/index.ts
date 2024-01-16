import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './schema';
import { context } from './graphql/context/context';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4003, () => console.log('server running on port ' + 4003));
