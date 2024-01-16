import { contextInterface } from '../context/interface/context.interface';
import { apiFilterInterface } from '../api-filter/interface/apiFilter.interface';
import { URLSearchParams } from 'url';
import { UserError } from './interface/userError.interface';
import { userInterface } from './interface/user.interface';
import { checkInterface } from '../../checkInterfaceGeneric';

const user = async (
  _: unknown,
  { id }: { id: string },
  { getUser }: contextInterface
): Promise<userInterface | UserError> => {
  const request = await getUser('/' + id);
  const user = request.data;
  if (checkInterface<userInterface>(user, 'id')) {
    return {
      statusCode: 404,
      message: 'Usuario não existe',
    };
  }
  return user;
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
  UserResult: {
    __resolveType: (obj: unknown) => {
      return checkInterface<UserError>(obj, 'statusCode')
    },
  },
};
