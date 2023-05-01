const { Schema, model } = require('mongoose');

const FAQSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const FAQ = model('FAQ', FAQSchema);

module.exports = FAQ;