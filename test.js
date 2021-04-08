import test from 'ava';
import execAll from './index.js';

test('main', t => {
	const result = execAll(/(\d+)/, '$200 and $400')[0];
	t.is(result.match, '200');
	t.is(result.subMatches[0], '200');
	t.is(result.index, 1);
	t.is(execAll(/\d+/g, '$200 and $400')[1].match, '400');
	t.is(execAll(/\d+/g, 'unicorn').length, 0);
});
