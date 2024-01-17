import { DataSourceContext } from '../datasources/Interfaces/DataSource.interface';
import { apiFilterInterface } from '../api-filter/interface/apiFilter.interface';
import { postInterface } from './interface/post.interface';

const post = async (
	_: unknown,
	{ id }: { id: string },
	{ dataSources }: DataSourceContext
): Promise<unknown> => {
	const post = await dataSources.postApi.dataLoader.load('/' + id);
	return post;
};

const posts = async (
	_: unknown,
	{ input }: { input: apiFilterInterface },
	{ dataSources }: DataSourceContext
): Promise<postInterface[]> => {
	const posts = dataSources.postApi.getPosts(input);
	return posts;
};

export const postResolvers = {
	Query: {
		post,
		posts,
	},
};
