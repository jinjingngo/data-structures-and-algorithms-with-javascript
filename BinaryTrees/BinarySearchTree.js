const Node = require('./Node');

class BinarySearchTree {
	constructor () {
		this.root = null;
	}

	insert (data) {
		const node = new Node(data, null, null);
		if (this.root === null) {
			this.root = node;
		} else {
			let current = this.root;
			let parent;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current === null) {
						parent.left = node;
						break;
					}
				} else {
					current = current.right;
					if (current === null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}

	inOrder (node) {
		if (node) {
			this.inOrder(node.left);
			console.log(node.show());
			this.inOrder(node.right);
		}
	}

	preOrder (node) {
		if (node) {
			console.log(node.show());
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}

	postOrder (node) {
		if (node) {
			this.postOrder(node.left);
			this.postOrder(node.right);
			console.log(node.show());
		}
	}

	getMin () {
		let current = this.root;
		while (current.left) {
			current = current.left;
		}
		return current.data;
	}

	getMax () {
		let current = this.root;
		while (current.right) {
			current = current.right;
		}
		return current.data;
	}

	find (data) {
		let current = this.root;
		while (current.data !== data) {
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
			if (current === null) {
				return null;
			}
		}
		return current;
	}

	smallest (node) {
		if (!node.left) {
			return node;
		} else {
			return this.smallest(node.left);
		}
	}

	removeNode (node, data) {
		if (!node) {
			return null;
		}
		if (data === node.data) {
			// node has no children
			if (!node.left && !node.right) {
				return null;
			}
			// node has no left child
			if (!node.left) {
				return node.right;
			}
			// node has no right child
			if (!node.right) {
				return node.left;
			}
			// node has two chindren
			const temp = this.smallest(node.right);
			node.data = temp.data;
			node.right = this.removeNode(node.left, data);
			return node;
		} else if (data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else {
			node.right = this.removeNode(node.right, data);
			return node;
		}
	}
}

module.exports = BinarySearchTree;