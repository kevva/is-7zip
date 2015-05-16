'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 5) {
		return false;
	}

	return buf[0] === 0x37 && buf[1] === 0x7a && buf[2] === 0xbc && buf[3] === 0xaf && buf[4] === 0x27 && buf[5] === 0x1c;
};
