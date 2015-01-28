'use strict';

var is7zip = require('../');
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');

test('should detect 7ZIP from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.7z'), 0, 6, function (err, buf) {
		t.assert(!err, err);
		t.assert(is7zip(buf));
	});
});
