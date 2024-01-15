import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      title: String
    }
  `,
  resolvers: {
    Query: {
      title: () => {
        return "Hellow";
      }
    }
  },
});


server.listen(4003, () => console.log('server running on port ' + 4003))
