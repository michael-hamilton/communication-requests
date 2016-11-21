module.exports = {
    //Renders admin page
    render: function (req, res, next) {
        res.render('admin/admin', {
            title: 'Admin',
            requests: req.requests,
            activeSeries: req.activeSeries
        });
    },

    redirectToAdmin: function (req, res, next) {
        res.redirect('/admin');
    }
};