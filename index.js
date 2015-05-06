'use strict';

var _ = require('lodash');
var postcss = require('postcss');
var cssstats = require('cssstats');

module.exports = postcss.plugin('cssstats', function(options, callback) {
  if (_.isFunction(options)) {
    callback = options;
    options = {};
  } else {
    options = options || {};
    callback = callback || _.noop;
  }

  return function(css, postcssResult) {
    // XXX TODO: cssstats should also be able to handle an AST
    callback(cssstats(css.toString()));
  };
});
