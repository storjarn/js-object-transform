DEBUG = !!process.env.DEBUG;
require('./helpers');

var testDestination = require('./data/destination1.js');

exports['json-transform'] = {
    'source and config only': require('./source and config only.js')
};
