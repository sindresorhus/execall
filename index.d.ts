export interface Match {
	match: string;
	subMatches: string[];
	index: number;
}

/**
Find multiple RegExp matches in a string.

@param regexp - Regular expression to match against the `string`.
@returns The matches.

@example
```
import execAll from 'execall';

execAll(/(\d+)/g, '$200 and $400');
// [
// 	{
// 		match: '200',
// 		subMatches: ['200'],
// 		index: 1
// 	},
// 	{
// 		match: '400',
// 		subMatches: ['400'],
// 		index: 10
// 	}
// ]
```
*/
export default function execAll(regexp: RegExp, string: string): Match[];
