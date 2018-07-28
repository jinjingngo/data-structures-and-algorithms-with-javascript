class Queue {
	constructor () {
		this.dataStore = [];
	}

	enqueue (element) {
		this.dataStore.push(element);
	}

	dequeue () {
		return this.dataStore.shift();
	}

	front () {
		return this.dataStore[0];
	}

	back () {
		return this.dataStore[this.dataStore.length - 1];
	}

	toString () {
		let result = '';
		const length = this.dataStore.length;
		for (let i = 0; i < length; i++) {
			result += this.dataStore[i] + '\n';
		}
		return result;
	}

	empty () {
		if (this.dataStore.length === 0) {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = Queue;