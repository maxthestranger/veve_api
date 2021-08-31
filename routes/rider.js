const router = require('express').Router();

// Import custoemr controller
var riderController = require('../controllers/rider');

// Customer routes
router.route('/').get(riderController.index).post(riderController.new);

router
  .route('/:rider_id')
  .get(riderController.view)
  .patch(riderController.update)
  .put(riderController.update)
  .delete(riderController.delete);

// Export API routes
module.exports = router;
