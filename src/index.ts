import { ApolloServer,  } from "apollo-server";
import { resolvers, typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.listen(4003, () => console.log('server running on port ' + 4003))
