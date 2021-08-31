Rider = require('../models/rider');

// Handle index actions
exports.index = function (req, res) {
  Rider.get(function (err, riders) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Rider retrieved successfully',
      data: riders,
    });
  });
};

// Handle create rider
exports.new = function (req, res) {
  let rider = new Rider();
  rider.phone_number = req.body.phone_number
    ? req.body.phone_number
    : rider.phone_number;
  rider.name = req.body.name;
  rider.user_type = req.body.user_type;
  rider.otp = req.body.otp;
  // rider.date_joined = req.body.date_joined;
  rider.lat = req.body.lat;
  rider.long = req.body.long;
  // save the Rider and check for errors
  rider.save(function (err) {
    // Check for validation error
    if (err) res.json(err);
    else
      res.json({
        message: 'New rider created!',
        data: rider,
      });
  });
};

// Handle view rider info
exports.view = function (req, res) {
  Rider.findById(req.params.rider_id, function (err, rider) {
    if (err) res.send(err);
    res.json({
      message: 'Rider details loading..',
      data: rider,
    });
  });
};

// Handle update Rider info
exports.update = function (req, res) {
  Rider.findById(req.params.rider_id, function (err, rider) {
    if (err) res.send(err);
    rider.phone_number = req.body.phone_number
      ? req.body.phone_number
      : rider.phone_number;
    rider.name = req.body.name;
    rider.user_type = req.body.user_type;
    rider.otp = req.body.otp;
    // rider.date_joined = req.body.date_joined;
    rider.lat = req.body.lat;
    rider.long = req.body.long;
    // save the Rider and check for errors
    rider.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: 'Rider Info updated',
        data: rider,
      });
    });
  });
};

// Handle delete rider
exports.delete = function (req, res) {
  Rider.deleteOne(
    {
      _id: req.params.rider_id,
    },
    function (err, rider) {
      if (err) res.send(err);
      res.json({
        status: 'success',
        message: 'Rider deleted',
      });
    }
  );
};
