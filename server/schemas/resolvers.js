const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    Users: async () => {
      return User.find();
    },

    User: async (parent, { UserId }) => {
      return User.findOne({ _id: UserId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const User = await User.create({ name, email, password });
      const token = signToken(User);

      return { token, User };
    },
    login: async (parent, { email, password }) => {
      const User = await User.findOne({ email });

      if (!User) {
        throw new AuthenticationError('No User with this email found!');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(User);
      return { token, User };
    },
  },
};

module.exports = resolvers;
