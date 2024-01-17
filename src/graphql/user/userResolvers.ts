import { apiFilterInterface } from '../api-filter/interface/apiFilter.interface';
import { userInterface } from './interface/user.interface';
import { DataSourceContext } from '../datasources/Interfaces/DataSource.interface';

const user = async (
	_: unknown,
	{ id }: { id: string },
	{ dataSources }: DataSourceContext
): Promise<unknown> => {
  const user = await dataSources.userApi.dataLoader.load(id);
	return user;
};

const users = async (
	_: unknown,
	{ input }: { input: apiFilterInterface },
	{ dataSources }: DataSourceContext
): Promise<userInterface[]> => {
	const users = await dataSources.userApi.getUsers(input)
	return users;
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
