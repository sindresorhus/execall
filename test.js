import test from 'ava';
import m from './';

test(t => {
	const f = m(/(\d+)/, '$200 and $400')[0];
	t.is(f.match, '200');
	t.is(f.sub[0], '200');
	t.is(f.index, 1);
	t.is(m(/\d+/g, '$200 and $400')[1].match, '400');
	t.is(m(/\d+/g, 'unicorn').length, 0);
});
