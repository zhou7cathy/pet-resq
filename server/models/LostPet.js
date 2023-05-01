const { Schema, model } = require('mongoose');

const lostPetSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
		postDate: {
      type: Date,
      default: Date.now,
    },
		AnimalTypes: [AnimalType],
    colors: [color],
  },
);

const LostPet = model('lostPet', lostPetSchema);

module.exports = LostPet;
