import {expectType} from 'tsd';
import execall = require('.');

expectType<execall.Match[]>(execall(/(\d+)/g, '$200 and $400'));
