const { gql } = require('apollo-server-express');
const { User, FAQ } = require('../models');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    User: User
  }

  type FAQ {
    _id: ID
    question: String
    answer: String
  }


  type Query {
    Users: [User]!
    User(UserId: ID!): User

    FAQs: [FAQ]!
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
