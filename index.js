'use strict';
module.exports = buf => {
	if (!buf || buf.length < 5) {
		return false;
	}

	return buf[0] === 0x37 && buf[1] === 0x7A && buf[2] === 0xBC && buf[3] === 0xAF && buf[4] === 0x27 && buf[5] === 0x1C;
};
