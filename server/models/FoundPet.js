const { Schema, model } = require('mongoose');

const foundPetSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
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

const FoundPet = model('lostPet', foundPetSchema);

module.exports = FoundPet;
