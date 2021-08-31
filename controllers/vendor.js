Vendor = require('../models/vendor');

// Handle index actions
exports.index = function (req, res) {
  Vendor.get(function (err, vendors) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Vendor retrieved successfully',
      data: vendors,
    });
  });
};

// Handle create vendor
exports.new = function (req, res) {
  let vendor = new Vendor();
  vendor.phone_number = req.body.phone_number
    ? req.body.phone_number
    : vendor.phone_number;
  vendor.store_name = req.body.store_name;
  vendor.user_type = req.body.user_type;
  vendor.otp = req.body.otp;
  // vendor.date_joined = req.body.date_joined;
  vendor.lat = req.body.lat;
  vendor.long = req.body.long;
  // save the Vendor and check for errors
  vendor.save(function (err) {
    // Check for validation error
    if (err) res.json(err);
    else
      res.json({
        message: 'New vendor created!',
        data: vendor,
      });
  });
};

// Handle view vendor info
exports.view = function (req, res) {
  Vendor.findById(req.params.vendor_id, function (err, vendor) {
    if (err) res.send(err);
    res.json({
      message: 'Vendor details loading..',
      data: vendor,
    });
  });
};

// Handle update Vendor info
exports.update = function (req, res) {
  Vendor.findById(req.params.vendor_id, function (err, vendor) {
    if (err) res.send(err);
    vendor.phone_number = req.body.phone_number
      ? req.body.phone_number
      : vendor.phone_number;
    vendor.store_name = req.body.store_name;
    vendor.user_type = req.body.user_type;
    vendor.otp = req.body.otp;
    // vendor.date_joined = req.body.date_joined;
    vendor.lat = req.body.lat;
    vendor.long = req.body.long;
    // save the Vendor and check for errors
    vendor.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: 'Vendor Info updated',
        data: vendor,
      });
    });
  });
};

// Handle delete vendor
exports.delete = function (req, res) {
  Vendor.deleteOne(
    {
      _id: req.params.vendor_id,
    },
    function (err, vendor) {
      if (err) res.send(err);
      res.json({
        status: 'success',
        message: 'Vendor deleted',
      });
    }
  );
};
