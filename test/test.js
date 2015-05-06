'use strict';

var fs = require('fs');
var assert = require('assert');
var postcss = require('postcss');
var isPresent = require('is-present');
var postcssCssstats = require('..');

describe('postcss-cssstats', function() {

  it('should return a stats object', function(done) {
    postcss()
      .use(postcssCssstats({}, function(stats) {
        assert.ok(isPresent(stats));
      }))
      .process(fixture('basic'))
      .then(function() {
        done();
      });
  });
});

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf8').toString();
}
