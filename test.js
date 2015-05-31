'use strict';
var test = require('ava');
var execall = require('./');

test(function (t) {
	var f = execall(/(\d+)/, '$200 and $400')[0];
	t.assert(f.match === '200');
	t.assert(f.sub[0] === '200');
	t.assert(f.index === 1);
	t.assert(execall(/\d+/g, '$200 and $400')[1].match === '400');
	t.assert(execall(/\d+/g, 'unicorn').length === 0);
	t.end();
});
