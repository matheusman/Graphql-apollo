import { RESTDataSource } from "apollo-datasource-rest";
import { postInterface } from "./interface/post.interface";

export class PostApi extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.API_URL + '/posts/';
	}

	getPost(id = ''): Promise<postInterface> {
		return this.get(id);
	}

	getPosts(input = {}): Promise<postInterface[]> {
		return this.get('', input, {
			cacheOptions: {
				ttl: 60,
			},
		});
	}
}
