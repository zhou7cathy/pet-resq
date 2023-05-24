const { AuthenticationError } = require('apollo-server-express');
const { User, FAQ, Animal, AnimalType } = require('../models');
const { signToken } = require('../utils/auth');
const { populate } = require('../models/User');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('animals');
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('animals');
    },
    animals: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
      return Animal.find(params).populate('animalType').sort({ postDate: -1 });
    },
    
    lostAnimals: async () => {
      return Animal.find({status: 'Lost Pet'}).populate('animalType').sort({ postDate: -1 });
    },

    foundAnimals: async () => {
      return Animal.find({status: 'Found Pet'}).populate('animalType').sort({ postDate: -1 });
    },
    
    animalTypes: async () => {
      return AnimalType.find();
    },

    animal: async (parent, { animalId }) => {
      return Animal.findOne({ _id: animalId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: 'animals',
          populate: { path: 'animalType' },
          options: {sort: {'postDate': -1}}
        });
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
        throw new AuthenticationError('Email/Password is incorrect!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Email/Password is incorrect!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addAnimal: async (parent, { status, name, location, image, description, animalType }, context) => {
      if (context.user) {
        const animal = await Animal.create({
          status,
          name,
          location,
          image,
          description,
          animalType,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { animals: animal._id } },
          {
            new: true,
            runValidators: true,
          }
        );

        return animal;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAnimal: async (parent, { animalId }, context) => {
      if (context.user) {
        const animal = await Animal.findOneAndDelete({
          _id: animalId,
        });

        var user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { animals: animal._id } },
          { new: true},
        );

        return User.findOne({ _id: context.user._id }).populate({
          path: 'animals',
          populate: { path: 'animalType' },
          options: {sort: {'postDate': -1}}
        });
      } else {
        throw new AuthenticationError('You need to be logged in!');
      }
    },
  },
};

module.exports = resolvers;