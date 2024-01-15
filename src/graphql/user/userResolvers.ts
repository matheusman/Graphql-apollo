import { userInterface } from './interface/user.interface';

const user = (): userInterface => {
  return {
    id: '1',
    name: 'ajsiodjioas',
  };
};

export const userResolvers = {
  Query: {
    user,
  },
};
