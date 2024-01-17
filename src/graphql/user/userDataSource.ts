import { RESTDataSource } from 'apollo-datasource-rest';
import { userInterface } from './interface/user.interface';
import { makeUserDataLouder } from './userDataLoader';
import DataLoader from 'dataloader';

export class UserApi extends RESTDataSource {
  dataLoader: DataLoader<unknown, unknown, unknown>;
	constructor() {
		super();
		this.baseURL = process.env.API_URL + '/users/';
		this.dataLoader = makeUserDataLouder(this.getUser.bind(this));
	}

	getUsers(urlParams = {}): Promise<userInterface[]> {
		return this.get('', urlParams, {
			cacheOptions: {
				ttl: 60,
			},
		});
	}

	getUser(id = ''): Promise<userInterface | userInterface[]> {
		return this.get(id, undefined, {
			cacheOptions: {
				ttl: 60,
			},
		});
	}
}
