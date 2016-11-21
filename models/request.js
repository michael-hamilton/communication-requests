var mongoose = require('mongoose');

var requestSchema = mongoose.Schema({
    series: String,
    user: Object,
    event: Object,
    mediums: Object,
    dates: Object,
    details: Object,
    submitted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);