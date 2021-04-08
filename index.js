import cloneRegexp from 'clone-regexp';

export default function execAll(regexp, string) {
	let match;
	const matches = [];
	const clonedRegexp = cloneRegexp(regexp, {lastIndex: 0});
	const isGlobal = clonedRegexp.global;

	// eslint-disable-next-line no-cond-assign
	while (match = clonedRegexp.exec(string)) {
		matches.push({
			match: match[0],
			subMatches: match.slice(1),
			index: match.index
		});

		if (!isGlobal) {
			break;
		}
	}

	return matches;
}
