const Node = require('./node');

class LinkedList {
	constructor () {
		this.head = new Node('head');
	}

	dispReverse () {
		let currentNode = this.head;
		currentNode = this.findLast();
		while (currentNode.previous !== null) {
			console.log(currentNode.element);
			currentNode = currentNode.previous;
		}
	}

	findLast () {
		let currentNode = this.head;
		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	remove (item) {
		let currentNode = this.find(item);
		if (currentNode.next !== null) {
			currentNode.previous.next = currentNode.next;
			currentNode.next.previous = currentNode.previous;
			currentNode.next = null;
			currentNode.previous = null;
		}
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

	insert (newElement, item) {
		const newNode = new Node(newElement);
		const current = this.find(item);
		newNode.next = current.next;
		newNode.previous = current;
		current.next = newNode;
	}
}

module.exports = LinkedList;