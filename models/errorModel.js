import mongoose from 'mongoose';

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

export default ErrorStack;
