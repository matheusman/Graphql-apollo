import { gql } from "apollo-server";

export const apiFilterTypeDefs = gql`
  input ApiFilterInput {
    _sort: String
    _start: Int
    _limit: Int
  }
`;
