import { PostApi } from "./posts/postDataSource";
import { UserApi } from "./user/userDataSource"

export interface DataSourceInterface {
  dataSources: {
    userApi: UserApi;
    postApi: PostApi;
  }
}
