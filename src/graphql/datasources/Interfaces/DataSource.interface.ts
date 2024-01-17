import { PostApi } from '../../posts/postDataSource';
import { UserApi } from '../../user/userDataSource';

export interface DataSourceContext {
	dataSources: DataSourceInterface;
}

export interface DataSourceInterface {
	userApi: UserApi;
	postApi: PostApi;
}
