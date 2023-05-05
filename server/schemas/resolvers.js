const { AuthenticationError } = require('apollo-server-express');
const { User, FAQ, Animal } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    Users: async () => {
      return User.find().populate('animals');
    },

    User: async (parent, { UserId }) => {
      return User.findOne({ _id: UserId }).populate('animals');
    },
    // animals: async (parent, { UserId }) => {
    //   const params = UserId ? { UserId } : {};
    //   return Animal.find(params).sort({ postDate: -1 });
    // },
    animals: async () => {
      return Animal.find();
    },

    animal: async (parent, { animalId }) => {
      return Animal.findOne({ _id: animalId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    FAQs: async () => {
      return FAQ.find();
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No User with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;