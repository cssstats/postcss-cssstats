# postcss-cssstats [![Build Status](https://secure.travis-ci.org/cssstats/postcss-cssstats.png?branch=master)](https://travis-ci.org/cssstats/postcss-cssstats)

A PostCSS plugin for cssstats.

## Installation

```bash
npm install --save postcss-cssstats
```

## Usage

```javascript
var postcss = require('postcss');
var cssstats = require('postcss-cssstats');

var output = postcss([
  cssstats(function(stats) {
    console.log(stats);
  }))
  .process(css);
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
