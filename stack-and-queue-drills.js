'use strict';

const Stack = require('./stack');
const starTrek = new Stack();

// const Queue = require('./queue');
// const queue = new Queue();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log(JSON.stringify(starTrek, null, 2));