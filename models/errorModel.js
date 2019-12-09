const mongoose = require('mongoose');

const errrorSchema = new mongoose.Schema({
  status: {
    type: String,
    required: [true, 'Error has a status']
  },
  error: {
    type: Object,
    required: [true, 'Error has a error name']
  },
  message: {
    type: String,
    required: [true, 'Error has a message']
  },
  stack: {
    type: String
    // required: [true, 'Error has a stack']
  }
});

const ErrorStack = mongoose.model('ErrorStack', errrorSchema);

module.exports = ErrorStack;
