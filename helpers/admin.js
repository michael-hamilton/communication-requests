var Request = require('../models/request');

module.exports = {
    //Renders admin page
    render: function(req, res, next) {
        res.render('admin/admin', {
            title: 'Submitted Requests',
            requests: req.requests
        });
    },

    //Gets all requests from database
    getRequests: function(req, res, next) {
        Request.find({}, function(err, requests) {
            req.requests = requests;
            next();
        });
    },

    //Gets a single request from the database with req.params._id and stores request in req.request
    getRequest: function(req, res, next) {
        Request.findOne({_id: req.params._id}, function(err, request) {
            req.request = request;
            next();
        });
    },

    //Sends value of request stored in req.request
    sendRequest: function(req, res, next) {
        res.send(req.request);
    },

    //Deletes single request by req.params._id from the database
    deleteRequest: function(req, res, next) {
        Request.remove({_id: req.params._id}, function(err) {
            next();
        });
    }
};