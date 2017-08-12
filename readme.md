# is-7zip [![Build Status](https://travis-ci.org/kevva/is-7zip.svg?branch=master)](https://travis-ci.org/kevva/is-7zip)

> Check if a Buffer/Uint8Array is a 7ZIP file


## Install

```
$ npm install is-7zip
```


## Usage

```js
const fs = require('fs');
const is7zip = require('is-7zip');

is7zip(fs.readFileSync('foo.7z'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
