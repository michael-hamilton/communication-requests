var mongoose = require('mongoose');

var seriesSchema = mongoose.Schema({
    title: String,
    description: String,
    dates: Object
});

module.exports = mongoose.model('Series', seriesSchema);