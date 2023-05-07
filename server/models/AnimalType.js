const { Schema, model } = require('mongoose');

const animalTypeSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
  },
);

const AnimalType = model('AnimalType', animalTypeSchema);

module.exports = AnimalType;
