module.exports = {
    render: function(req, res, next) {
        res.render('requests', { title: 'Communication Requests' });
    }
};