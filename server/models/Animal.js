const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
      type: [String],
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
      get: (timestamp) => dateFormat(timestamp),
    },
		animalType: { 
      type: Schema.Types.ObjectId, 
      ref: 'AnimalType' ,
      required: true,
    },
  },
);

// set up pre-save middleware to create id
AnimalSchema.pre('save', async function (next) {
  if (this.isNew && !this._id) {
    this._id = new Types.ObjectId()
  }

  next();
});

const Animal = model('Animal', AnimalSchema);

module.exports = Animal;
