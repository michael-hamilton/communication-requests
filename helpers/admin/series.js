var Series = require('../../models/series');

module.exports = {
    //Gets all requests from database
    getSeries: function(req, res, next) {
        Series.find({}, function(err, series) {
            req.series = series;
            next();
        });
    },

    //Gets a single request from the database with req.params._id and stores request in req.request
    getSingleSeries: function(req, res, next) {
        Series.findOne({_id: req.params._id}, function(err, singleSeries) {
            req.series = singleSeries;
            next();
        });
    },

    getActiveSeries: function(req, res, next) {
        Series.findOne({}, function(err, activeSeries) {
            req.activeSeries = activeSeries;
            next();
        }).limit(1).sort({$natural:-1});
    },

    //Validates inputs from form submission
    validateInputs: function(req, res, next) {
        req.flash('success', 'New series successfully saved!');
        next();
    },

    //Saves submission data to database
    save: function(req, res, next) {
        new Series({
            title: req.body.title,
            description: req.body.description,
            dates: req.body.dates,
        }).save(function(err, request) {
            if(err) new Error("Error saving series");
            next();
        });
    },

    //Sends value of request stored in req.request
    sendSeries: function(req, res, next) {
        res.send(req.series);
    }
};