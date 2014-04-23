/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var is7zip = require('../');
var path = require('path');

describe('is7zip()', function () {
    function check(file) {
        return is7zip(fs.readFileSync(file));
    }

    it('should detect 7ZIP from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.7z')));
        cb();
    });
});
