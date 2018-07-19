const Stack = require('./stack');
const stack = new Stack();

stack.push('David');
stack.push('Raymond');
stack.push('Bryan');
console.log('Length: ', stack.length());
console.log('Take a Peek at: ', stack.peek());
const popped = stack.pop();
console.log('The popped element is: ', popped);
console.log('Take a Peek at: ', stack.peek());
stack.push('Cynthia');
console.log('Take a Peek at: ', stack.peek());
stack.clear();
console.log('Length: ', stack.length());
console.log('Take a Peek at: ', stack.peek());
stack.push('Clayton');
console.log('Take a Peek at: ', stack.peek());