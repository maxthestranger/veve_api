const router = require('express').Router();

// Set default API response
// router.get('/', function (req, res) {
//   res.json({
//     status: 'API is Working',
//     message: 'Welcome to Veve crafted with love!',
//   });
// });

// Import custoemr controller
var customerController = require('../controllers/customer');

// Customer routes
router.route('/').get(customerController.index).post(customerController.new);

router
  .route('/:customer_id')
  .get(customerController.view)
  .patch(customerController.update)
  .put(customerController.update)
  .delete(customerController.delete);

// Export API routes
module.exports = router;
