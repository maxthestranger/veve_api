const mongoose = require('mongoose');

const { Schema } = mongoose;
// Setup schema
const riderSchema = new Schema({
  phone_number: String,
  name: String,
  user_type: String,
  otp: String,
  date_joined: {
    type: Date,
    default: Date.now,
  },
  lat: Number,
  long: Number,
});
// Export Contact model
const Rider = (module.exports = mongoose.model('rider', riderSchema));
module.exports.get = function (callback, limit) {
  Rider.find(callback).limit(limit);
};
