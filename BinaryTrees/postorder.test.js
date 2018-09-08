const BinarySearchTree = require('./BinarySearchTree');

const nums = new BinarySearchTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('Preorder traversal: ');
nums.postOrder(nums.root);