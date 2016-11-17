var mongoose = require('mongoose');

var requestSchema = mongoose.Schema({
    user: Object,
    event: Object,
    mediums: Object,
    dates: Object,
    details: Object
});

module.exports = mongoose.model('Request', requestSchema);