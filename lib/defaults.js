'use strict';

require('dotenv').config();
var bugsnag = require('bugsnag');
bugsnag.register(process.env.BUG_SNAG_TOKEN);
module.exports = {
   bugsnag : bugsnag
}
