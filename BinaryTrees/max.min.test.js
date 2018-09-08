const BinarySearchTree = require('./BinarySearchTree');

const nums = new BinarySearchTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
const min = nums.getMin();
console.log('The minimum value of the BST is:', min);
const max = nums.getMax();
console.log('The maximum value of the BST is:', max);