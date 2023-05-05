const { Schema, model } = require('mongoose');

const AnimalSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    status: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    location: {
      type: String,
			required: true,
    },
		image:{
      type: String,
      required: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
			required: true,
    },
		postDate: {
      type: Date,
      default: Date.now,
    },
		animalType: { 
      type: Schema.Types.ObjectId, 
      ref: 'AnimalType' ,
      required: true,
    },
  },
);

const Animal = model('animal', AnimalSchema);

module.exports = Animal;
