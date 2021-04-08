# execall

> Find multiple RegExp matches in a string

Instead of having to iterate over `RegExp#exec`, immutable, and with a nicer result format.

## Install

```
$ npm install execall
```

## Usage

```js
import execAll from 'execall';

execAll(/(\d+)/g, '$200 and $400');
/*
[
	{
		match: '200',
		subMatches: ['200'],
		index: 1
	},
	{
		match: '400',
		subMatches: ['400'],
		index: 10
	}
]
*/
```

## API

### execAll(regexp, string)

Returns an `object[]` with a match, sub-matches, and index.

#### regexp

Type: `RegExp`

Regular expression to match against the `string`.

#### string

Type: `string`

## Related

- [replace-string](https://github.com/sindresorhus/replace-string) - Replace all substring matches in a string
