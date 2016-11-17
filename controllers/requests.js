var express = require('express');
var router = express.Router();
var requests = require('../helpers/requests');

//Handles get requests at /
router.get('/', requests.render);

//Handles post requests at /
router.post('/', requests.validateInputs, requests.save, requests.render);

module.exports = router;