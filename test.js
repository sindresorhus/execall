import test from 'ava';
import execall from '.';

test('main', t => {
	const result = execall(/(\d+)/, '$200 and $400')[0];
	t.is(result.match, '200');
	t.is(result.subMatches[0], '200');
	t.is(result.index, 1);
	t.is(execall(/\d+/g, '$200 and $400')[1].match, '400');
	t.is(execall(/\d+/g, 'unicorn').length, 0);
});
