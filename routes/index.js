var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    status: 'API is active',
    message: 'Testing the API endpoints for veve',
  });
});

module.exports = router;
