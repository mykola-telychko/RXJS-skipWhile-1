import { interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/skipwhile
// Example 1: Skip while values below threshold
//emit every 1s
const srcInterval$ = interval(1000);
//skip emitted values from source while value is less than 5
const example = srcInterval$.pipe(skipWhile((val) => val < 5));
//output: 5...6...7...8....
const subscribe = example.subscribe((val) => console.log(val));
