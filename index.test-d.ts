/* eslint-disable import/named */

import {expectType} from 'tsd';
import {intervalometer, frameIntervalometer, timerIntervalometer, IntervalometerReturnValue} from '.'

expectType<IntervalometerReturnValue>(intervalometer(() => { }, setTimeout, () => { }, 1));
expectType<IntervalometerReturnValue>(frameIntervalometer(() => { }));
expectType<IntervalometerReturnValue>(timerIntervalometer(() => { }, 1000));
