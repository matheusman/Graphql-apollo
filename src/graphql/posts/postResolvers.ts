import { postInterface } from "./interface/post.interface"

const post = () : postInterface => {
  return {
    id: '1',
    title: 'title'
  }
}

export const postResolvers = {
  Query: {
    post
  }
}
