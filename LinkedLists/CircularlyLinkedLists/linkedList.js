const LinkList = require('../linkedList');
const Node = require('../node');

class circularlyLinkedList extends LinkList {
	constructor () {
		super();
		this.head = new Node('head');
		this.head.next = this.head;
	}

	display () {
		let currentNode = this.head;
		while (currentNode.next !== null && currentNode.next.element !== 'head') {
			console.log(currentNode.next.element);
			currentNode = currentNode.next;
		}
	}
}

module.exports = circularlyLinkedList;