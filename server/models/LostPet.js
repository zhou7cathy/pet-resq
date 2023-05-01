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
		colors: [
			{ 
				type: Schema.Types.ObjectId, 
				ref: 'Color',
				required: true,
			}
		],
  },
);

const LostPet = model('lostPet', lostPetSchema);

module.exports = LostPet;
