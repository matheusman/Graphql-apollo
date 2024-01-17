import { PostApi } from '../posts/postDataSource';
import { UserApi } from '../user/userDataSource';
import { DataSourceInterface } from './Interfaces/DataSource.interface';

export const dataSources: DataSourceInterface = {
	postApi: new PostApi(),
	userApi: new UserApi(),
};
