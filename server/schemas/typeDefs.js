const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    User: User
  }

  type Query {
    Users: [User]!
    User(UserId: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(UserId: ID!, skill: String!): User
    removeUser(UserId: ID!): User
    removeSkill(UserId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;
