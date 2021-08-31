const router = require('express').Router();

// Import custoemr controller
var vendorController = require('../controllers/vendor');

// Customer routes
router.route('/').get(vendorController.index).post(vendorController.new);

router
  .route('/:vendor_id')
  .get(vendorController.view)
  .patch(vendorController.update)
  .put(vendorController.update)
  .delete(vendorController.delete);

// Export API routes
module.exports = router;
