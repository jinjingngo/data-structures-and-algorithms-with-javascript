const Node = require('./node');

class LinkedList {
	constructor () {
		this.head = new Node('head');
	}

	remove (item) {
		const previousNode = this.findPrevious(item);
		if (previousNode != null) {
			previousNode.next = previousNode.next.next;
		}
	}

	findPrevious (item) {
		let currentNode = this.head;
		while (currentNode.next !== null && currentNode.next.element !== item) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	display () {
		let currentNode = this.head;
		while (currentNode.next !== null) {
			console.log(currentNode.next.element);
			currentNode = currentNode.next;
		}
	}

	find (item) {
		let currentNode = this.head;
		while (currentNode.element !== item) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	insert (element, item) {
		const node = new Node(element);
		const current = this.find(item);
		node.next = current.next;
		current.next = node;
	}
}

module.exports = LinkedList;