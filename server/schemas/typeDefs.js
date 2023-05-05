const { gql } = require('apollo-server-express');
const { User, FAQ, Animal, AnimalType } = require('../models');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    animals:[Animal]!
  }

  type Animal {
    _id: ID
    location: String
    image: String
    description: String
    postDate: String
    animalTypes: [AnimalType]!
  }

  type AnimalType {
    _id: ID
    name: String
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
    me: User
    FAQs: [FAQ]!
    animals:[Animal]!
    animal(animalId: ID!): Animal
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
