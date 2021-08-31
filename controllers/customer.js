Customer = require('../models/customer');

// Handle index actions
exports.index = function (req, res) {
  Customer.get(function (err, customers) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Customer retrieved successfully',
      data: customers,
    });
  });
};

// Handle create customer
exports.new = function (req, res) {
  let customer = new Customer();
  customer.phone_number = req.body.phone_number
    ? req.body.phone_number
    : customer.phone_number;
  customer.mpesa_phone_number = req.body.mpesa_phone_number;
  customer.delivery_location = req.body.delivery_location;
  customer.user_type = req.body.user_type;
  customer.otp = req.body.otp;
  // customer.date_joined = req.body.date_joined;
  customer.lat = req.body.lat;
  customer.long = req.body.long;
  customer.order = req.body.order;
  // save the Customer and check for errors
  customer.save(function (err) {
    // Check for validation error
    if (err) res.json(err);
    else
      res.json({
        message: 'New customer created!',
        data: customer,
      });
  });
};

// Handle view customer info
exports.view = function (req, res) {
  Customer.findById(req.params.customer_id, function (err, customer) {
    if (err) res.send(err);
    res.json({
      message: 'Customer details loading..',
      data: customer,
    });
  });
};

// Handle update Customer info
exports.update = function (req, res) {
  Customer.findById(req.params.customer_id, function (err, customer) {
    if (err) res.send(err);
    customer.phone_number = req.body.phone_number
      ? req.body.phone_number
      : customer.phone_number;
    customer.mpesa_phone_number = req.body.mpesa_phone_number;
    customer.delivery_location = req.body.delivery_location;
    customer.user_type = req.body.user_type;
    customer.otp = req.body.otp;
    // customer.date_joined = req.body.date_joined;
    customer.lat = req.body.lat;
    customer.long = req.body.long;
    customer.order = req.body.order;
    // save the Customer and check for errors
    customer.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: 'Customer Info updated',
        data: customer,
      });
    });
  });
};

// Handle delete customer
exports.delete = function (req, res) {
  Customer.deleteOne(
    {
      _id: req.params.customer_id,
    },
    function (err, customer) {
      if (err) res.send(err);
      res.json({
        status: 'success',
        message: 'Customer deleted',
      });
    }
  );
};
