var express = require('express');
var router = express.Router();
var admin = require('../helpers/admin/admin');
var requests = require('../helpers/admin/requests');
var series = require('../helpers/admin/series');

/* Request related controllers */

//Handles get requests at /
router.get('/', requests.getRequests, admin.render);

//Handles getting single requests by _id
router.get('/requests/:_id', requests.getSingleRequest, requests.sendRequest);

//Handles deleting a single request
router.get('/requests/delete/:_id', requests.deleteRequest, requests.getRequests, admin.render);


/* Series related controllers */

//Handles get requests to /series
router.get('/series', series.getSeries, series.sendSeries);

//Handles post requests to /series
router.post('/series', series.validateInputs, series.save, admin.redirectToAdmin);

module.exports = router;