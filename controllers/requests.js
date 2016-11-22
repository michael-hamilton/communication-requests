var express = require('express');
var router = express.Router();
var requests = require('../helpers/requests');
var series = require('../helpers/admin/series');

//Handles get requests at /
router.get('/', series.getActiveSeries, requests.render);

//Handles post requests at /
router.post('/', requests.validateInputs, requests.save, series.getActiveSeries, requests.render);

module.exports = router;