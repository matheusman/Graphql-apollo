import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './schema';
import { context } from './graphql/context/context';
import 'dotenv/config';
import { UserApi } from './graphql/user/userDataSource';
import { PostApi } from './graphql/posts/postDataSource';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
	dataSources: () => {
		return {
			userApi: new UserApi(),
			postApi: new PostApi(),
		};
	},
});

server.listen(4003, () => console.log('server running on port ' + 4003));
