import { RESTDataSource } from 'apollo-datasource-rest';
import { postInterface } from './interface/post.interface';
import { makePostDataLoader } from './postDataLoader';
import DataLoader from 'dataloader';

export class PostApi extends RESTDataSource {
	dataLoader: DataLoader<unknown, unknown, unknown>;
	constructor() {
		super();
		this.baseURL = process.env.API_URL + '/posts/';
		this.dataLoader = makePostDataLoader(this.getPost.bind(this));
	}

	getPost(id = ''): Promise<postInterface | postInterface[]> {
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
