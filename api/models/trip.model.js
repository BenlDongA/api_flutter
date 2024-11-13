const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  solike: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
  },
  countryName: {
    type: String,
    required: true
}
  

});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
