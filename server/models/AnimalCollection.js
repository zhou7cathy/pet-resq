const { Schema, model } = require('mongoose');

const AnimalCollection = new Schema(
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
		AnimalTypes: [
			{ 
				type: Schema.Types.ObjectId, 
				ref: 'AnimalType' ,
				required: true,
			}
		],
  },
);

const AnimalCollection = model('animalCollection', AnimalCollectionSchema);

module.exports = AnimalCollection;
