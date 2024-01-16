import { RESTDataSource } from "apollo-datasource-rest";
import { userInterface } from "./interface/user.interface";

export class UserApi extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.API_URL + '/users/';
	}

	getUsers(urlParams = {}): Promise<userInterface[]> {
		return this.get('', urlParams, {
			cacheOptions: {
				ttl: 60,
			},
		});
	}

	getUser(id = ''): Promise<userInterface> {
		return this.get(id, undefined, {
			cacheOptions: {
				ttl: 60,
			},
		});
	}
}
