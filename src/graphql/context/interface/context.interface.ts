import { AxiosResponse } from 'axios';
import { userInterface } from '../../user/interface/user.interface';
import { postInterface } from '../../posts/interface/post.interface';

export interface contextInterface {
  getUser: (id: string) => Promise<AxiosResponse<userInterface>>;
  getUsers: (
    input: string | undefined
  ) => Promise<AxiosResponse<userInterface[]>>;
  getPost: (id: string) => Promise<AxiosResponse<postInterface>>;
  getPosts: (
    input: string | undefined
  ) => Promise<AxiosResponse<postInterface[]>>;
}
