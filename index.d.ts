declare namespace execall {
	interface Match {
		match: string;
		sub: string[];
		index: number;
	}
}

/**
Find multiple RegExp matches in a string.

@param regexp - Regular expression to match against the `string`.
@returns An array of matches.

@example
```
import execall = require('execall');

execall(/(\d+)/g, '$200 and $400');
// [
// 	{
// 		match: '200',
// 		sub: ['200'],
// 		index: 1
// 	},
// 	{
// 		match: '400',
// 		sub: ['400'],
// 		index: 10
// 	}
// ]
```
*/
declare function execall(regexp: RegExp, string: string): execall.Match[];

export = execall;
