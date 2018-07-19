const Stack = require('./stack');

const factorial = (n) => {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};

const stack_factorial = (n) => {
	const stack = new Stack();
	while (n > 1) {
		stack.push(n--);
	}
	let result = 1;
	while (stack.length() > 0) {
		result *= stack.pop();
	}
	return result;
};

console.table([factorial(5), stack_factorial(5)]);