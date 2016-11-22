var Request = require('../models/request');

module.exports = {
    //Renders request form
    render: function(req, res, next) {
        res.render('requests', {
            series: req.activeSeries,
            title: 'Communication Requests'
        });
    },

    //Validates inputs from form submission.  Checks all checkbox inputs and converts their values to true or false
    validateInputs: function(req, res, next) {
        req.body.event.is_event = req.body.event.is_event=="on" ? true : false;

        req.body.mediums = req.body.mediums ? req.body.mediums : {};
        req.body.mediums.app = req.body.mediums.app=="on" ? true : false;
        req.body.mediums.announcements = req.body.mediums.announcements=="on" ? true : false;
        req.body.mediums.before_mass_slides = req.body.mediums.before_mass_slides=="on" ? true : false;
        req.body.mediums.endnotes = req.body.mediums.endnotes=="on" ? true : false;
        req.body.mediums.online_campus = req.body.mediums.online_campus=="on" ? true : false;
        req.body.mediums.website = req.body.mediums.website=="on" ? true : false;
        req.body.mediums.worship_fully = req.body.mediums.worship_fully=="on" ? true : false;
        req.body.mediums.facebook = req.body.mediums.facebook=="on" ? true : false;
        req.body.mediums.instagram = req.body.mediums.instagram=="on" ? true : false;
        req.body.mediums.twitter = req.body.mediums.twitter=="on" ? true : false;

        req.body.dates = req.body.dates ? req.body.dates : {};
        for(var date in req.body.dates) {
            req.body.dates[date] = req.body.dates[date]=="on" ? true : false;
        }

        next();
    },

    //Saves submission data to database
    save: function(req, res, next) {
        new Request({
            series: req.body.series,
            user: req.body.user,
            event: req.body.event,
            mediums: req.body.mediums,
            dates: req.body.dates,
            details: req.body.details
        }).save(function(err, request) {
            if(err) new Error("Error saving request");
            req.flash('success', 'Your communication request was successfully sent!');
            next();
        });
    }
};