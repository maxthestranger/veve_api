const mongoose = require('mongoose');

const { Schema } = mongoose;
// Setup schema
const customerSchema = new Schema({
  phone_number: String,
  mpesa_phone_number: String,
  delivery_location: String,
  user_type: String,
  otp: String,
  date_joined: {
    type: Date,
    default: Date.now,
  },
  lat: Number,
  long: Number,
  order: Object,
});
// Export Contact model
const Customer = (module.exports = mongoose.model('customer', customerSchema));
module.exports.get = function (callback, limit) {
  Customer.find(callback).limit(limit);
};
