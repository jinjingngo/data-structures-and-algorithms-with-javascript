const BinarySearchTree = require('./BinarySearchTree');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const nums = new BinarySearchTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.inOrder(nums.root);
rl.question('Enter a value to search for: ', (anwser) => {
	const value = parseInt(anwser);
	const found = nums.find(value);
	if (found) {
		console.log('Found', value, 'in the BST.');
	} else {
		console.log(value, 'was not found in the BST.');
	}
});