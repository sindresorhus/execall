import {expectType} from 'tsd';
import execAll, {Match} from './index.js';

expectType<Match[]>(execAll(/(\d+)/g, '$200 and $400'));
