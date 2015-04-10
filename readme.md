# is-7zip [![Build Status](http://img.shields.io/travis/kevva/is-7zip/master.svg?style=flat)](https://travis-ci.org/kevva/is-7zip)

> Check if a Buffer/Uint8Array is a 7ZIP file


## Install

```
$ npm install --save is-7zip
```


## Usage

```js
var read = require('fs').readFileSync;
var is7zip = require('is-7zip');

is7zip(read('foo.7z'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
