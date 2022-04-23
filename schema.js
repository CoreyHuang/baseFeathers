const { gql } = require('apollo-server-express');

const typeDefs = gql`


type User {
  name: String!
  age: Int!
  married: Boolean!
}

type Query {
  getAllusers:  [User!]!
}
`;

module.exports = {typeDefs}