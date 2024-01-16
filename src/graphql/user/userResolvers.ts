import { apiFilterInterface } from '../api-filter/interface/apiFilter.interface';
import { userInterface } from './interface/user.interface';
import { DataSourceInterface } from '../DataSource.interface';

const user = async (
	_: unknown,
	{ id }: { id: string },
	{ dataSources }: DataSourceInterface
): Promise<userInterface> => {
	const user = await dataSources.userApi.getUser('/' + id);
	return user;
};

const users = async (
	_: unknown,
	{ input }: { input: apiFilterInterface },
	{ dataSources }: DataSourceInterface
): Promise<userInterface[]> => {
	const users = await dataSources.userApi.getUsers(input);
	return users;
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
