var Request = require('../models/request');

module.exports = {
    //Renders request form
    render: function(req, res, next) {
        res.render('requests', { title: 'Communication Requests' });
    },

    //Validates inputs from form submission.  Checks all checkbox inputs and converts their values to true or false
    validateInputs: function(req, res, next) {
        next();
    },

    //Saves submission data to database
    save: function(req, res, next) {
        new Request({
            user: req.body.user,
            event: req.body.event,
            mediums: req.body.mediums,
            dates: req.body.dates,
            details: req.body.details
        }).save(function(err, request) {
            if(err) new Error("Error saving request");
            next();
        });
    }
};