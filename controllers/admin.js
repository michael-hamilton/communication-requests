var express = require('express');
var router = express.Router();
var admin = require('../helpers/admin');

//Handles get requests at /
router.get('/', admin.getRequests, admin.render);

//Handles getting single requests by _id
router.get('/requests/:_id', admin.getRequest, admin.sendRequest);

//Handles deleting a single request
router.get('/requests/delete/:_id', admin.deleteRequest, admin.getRequests, admin.render);

module.exports = router;