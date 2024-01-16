import { apiFilterInterface } from '../api-filter/interface/apiFilter.interface';
import { contextInterface } from '../context/interface/context.interface';
import { postInterface } from './interface/post.interface';

const post = async (
  _: unknown,
  { id }: { id: string },
  { getPost }: contextInterface
): Promise<postInterface> => {
  const response = await getPost('/' + id);
  const posts = await response.data;
  return posts;
};

const posts = async (
  _: unknown,
  { input }: { input: apiFilterInterface },
  { getPosts }: contextInterface
): Promise<postInterface[]> => {
  const params = new URLSearchParams(input as URLSearchParams | undefined);
  const response = await getPosts('/?' + params.toString());
  const posts = await response.data;
  return posts;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
