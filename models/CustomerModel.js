const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  firstName: String,
  dateOfBirth: Date,
  address: String,
  phoneNumber: String,
  points: Number,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
