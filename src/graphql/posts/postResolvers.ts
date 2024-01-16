import { DataSourceInterface } from '../DataSource.interface';
import { apiFilterInterface } from '../api-filter/interface/apiFilter.interface';
import { postInterface } from './interface/post.interface';

const post = async (
  _: unknown,
  { id }: { id: string },
  { dataSources }: DataSourceInterface
): Promise<postInterface> => {
  const post = await dataSources.postApi.getPost('/' + id);
  return post;
};

const posts = async (
  _: unknown,
  { input }: { input: apiFilterInterface },
  { dataSources }: DataSourceInterface
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
