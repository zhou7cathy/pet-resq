const { Schema, model } = require('mongoose');

const animalTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
);

const AnimalType = model('animalType', animalTypeSchema);

module.exports = AnimalType;
