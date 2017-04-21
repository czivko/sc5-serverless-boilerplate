'use strict';

require('dotenv').config();
var bugsnag = require('bugsnag');
bugsnag.register(process.env.BUG_SNAG_TOKEN);

function parseJson(data, contentType){
  if(contentType === 'application/x-www-form-urlencoded'){
    return queryStringToJSON(data);
  }

  if (typeof data === 'string' || data instanceof String){
    return JSON.parse(data);
  }
  return data;
}

function queryStringToJSON(query) {
    var pairs = query.split('&');

    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        pair[1] = pair[1].replace(/\+/g, ' ');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
}

module.exports = {
   bugsnag : bugsnag,
   parseJson : parseJson
}
