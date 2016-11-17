var express = require('express');
var router = express.Router();
var requests = require('../helpers/requests');

/* GET home page. */
router.get('/', requests.render);

module.exports = router;