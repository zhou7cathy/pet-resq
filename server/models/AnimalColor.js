const { Schema, model } = require('mongoose');

const animalColorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
);

const AnimalColor = model('animalColor', animalColorSchema);

module.exports = AnimalColor;