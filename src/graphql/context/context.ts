import axios from 'axios';
import { contextInterface } from './interface/context.interface';

const url = 'http://localhost:3000/';

export const context: contextInterface = {
  getUser: (id = '/') => {
    return axios.get(url + 'users' + id);
  },
  getUsers: () => {
    return axios.get(url + 'users');
  },
  getPost: (id = '/') => {
    return axios.get(url + 'posts' + id);
  },
  getPosts: () => {
    return axios.get(url + 'posts');
  },
};
