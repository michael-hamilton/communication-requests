module.exports = {
    //Renders request form
    render: function(req, res, next) {
        res.render('requests', { title: 'Communication Requests' });
    },

    //Validates inputs from from submission
    validateInputs: function(req, res, next) {
        next();
    },

    //Saves submission data to database
    save: function(req, res, next) {
        next();
    }
};