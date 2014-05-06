# is-7zip [![Build Status](https://travis-ci.org/kevva/is-7zip.svg?branch=master)](https://travis-ci.org/kevva/is-7zip)

> Check if a Buffer/Uint8Array is a 7ZIP file

## Install

```bash
$ npm install --save is-7zip
```

```bash
$ component install kevva/is-7zip
```

```bash
$ bower install --save is-7zip
```

## Usage

```js
var fs = require('fs');
var is7zip = require('is-7zip');
var buf = fs.readFileSync('foo.7z');

is7zip(buf);
// => true
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
