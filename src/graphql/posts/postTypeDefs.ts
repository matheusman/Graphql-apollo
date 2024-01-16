import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFilterInput): [Post!]!
    # user: User!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: String!
    indexRef: Int!
    createdAt: String!
  }
`;

// "id": "940",
//   "title": "Similique impedit consequatur qui ipsam sint quam rerum dolores distinctio.",
//   "body": "Quidem nisi saepe omnis quia repudiandae odio. Eius quia quis inventore. Illo nihil voluptas est. Quo atque facilis autem velit. Aspernatur quia labore eveniet dolorum.\n \rEum aut non modi modi quis delectus. Aspernatur quis earum ipsam sed qui a enim. Blanditiis nobis suscipit.\n \rUt pariatur omnis beatae. Aut veritatis dicta cum ipsam sequi alias aspernatur. Sed perferendis cumque aspernatur.\n \rRepellendus dolores vero eum consequatur magni culpa quisquam. Architecto qui qui dolorem voluptates quam laborum ratione quam velit. Ducimus molestiae aut dicta iure. Ab necessitatibus sunt ratione delectus molestiae a. Minus in aut qui aspernatur adipisci odit deleniti quo.\n \rExplicabo mollitia modi sint quisquam tempora excepturi eveniet minima. Cupiditate veniam tempora et quam quas maiores sed deleniti. Assumenda magnam qui id rerum laborum praesentium. Dolore omnis perferendis reiciendis qui est deserunt architecto.\n \rQuia vel nobis ducimus quis magnam quos vitae. Dicta dolor est modi adipisci laborum eos. Ad eveniet omnis itaque tempora debitis hic qui incidunt. Aliquam error blanditiis deleniti consequuntur distinctio dignissimos labore commodi suscipit.",
//   "userId": "903",
//   "indexRef": 12,
//   "createdAt": "2015-08-28T14:07:58.674Z"
