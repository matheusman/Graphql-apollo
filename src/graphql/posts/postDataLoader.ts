import DataLoader from 'dataloader';
import { postInterface } from './interface/post.interface';
import { checkInterface } from '../../checkInterfaceGeneric';
import { userInterface } from '../user/interface/user.interface';

export const makePostDataLoader = (
	getPost: (id: string | undefined) => Promise<postInterface[] | postInterface>
) => {
	return new DataLoader(async (ids) => {
		const queryParams = ids.join('&userId=');
		const posts = await getPost('/?userId=' + queryParams);
		if (Array.isArray(posts)) {
			return posts.map((post) => {
				return ids.filter((id) => post.userId === id);
			});
    }

    return checkInterface<userInterface>(posts, 'id') ? [posts] : [{}];
	});
};
