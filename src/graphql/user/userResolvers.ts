import { userInterface } from './interface/user.interface';
import { contextInterface } from '../context/interface/context.interface';
import { apiFilterInterface } from '../api-filter/interface/apiFilter.interface';
import { URLSearchParams } from 'url';

const user = async (
  _: unknown,
  { id }: { id: string },
  { getUser }: contextInterface
): Promise<userInterface> => {
  const user = await getUser('/' + id);
  const data = await user.data;
  return data;
};

const users = async (
  _: unknown,
  { input }: { input: apiFilterInterface },
  { getUsers }: contextInterface
): Promise<userInterface[]> => {
  const params = new URLSearchParams(input as URLSearchParams | undefined);
  const users = await getUsers('/?' + params.toString());
  const data = await users.data;
  return data;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
