var Request = require('../../models/request');

module.exports = {
    //Renders single request
    render: function (req, res, next) {
        res.render('admin/request', {
            title: 'Single Request',
            request: req.request
        });
    },

    //Gets all requests from database
    getRequests: function(req, res, next) {
        Request.find({}, function(err, requests) {
            req.requests = requests;
            next();
        }).sort({$natural:-1});
    },

    //Gets a single request from the database with req.params._id and stores request in req.request
    getSingleRequest: function(req, res, next) {
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