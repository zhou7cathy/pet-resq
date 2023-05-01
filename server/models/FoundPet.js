const { Schema, model } = require('mongoose');

const foundPetSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
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
		colors: [
			{ 
				type: Schema.Types.ObjectId, 
				ref: 'Color',
				required: true,
			}
    ]
  },
);

const FoundPet = model('lostPet', foundPetSchema);

module.exports = FoundPet;
