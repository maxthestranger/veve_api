const mongoose = require('mongoose');

const { Schema } = mongoose;
// Setup schema
const vendorSchema = new Schema({
  store_name: String,
  phone_number: String,
  user_type: String,
  otp: String,
  payment_method: String,
  cover_image: String,
  date_joined: {
    type: Date,
    default: Date.now,
  },
  lat: Number,
  long: Number,
});
// Export Contact model
const Vendor = (module.exports = mongoose.model('vendor', vendorSchema));
module.exports.get = function (callback, limit) {
  Vendor.find(callback).limit(limit);
};
