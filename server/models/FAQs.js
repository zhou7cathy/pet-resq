const { Schema, model } = require('mongoose');

const FAQsSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
);

const FAQs = model('FAQs', FAQsSchema);

module.exports = FAQs;