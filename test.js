import test from 'ava';
import execall from '.';

test('main', t => {
	const f = execall(/(\d+)/, '$200 and $400')[0];
	t.is(f.match, '200');
	t.is(f.sub[0], '200');
	t.is(f.index, 1);
	t.is(execall(/\d+/g, '$200 and $400')[1].match, '400');
	t.is(execall(/\d+/g, 'unicorn').length, 0);
});
