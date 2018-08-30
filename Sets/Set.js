class Set {
	constructor () {
		this.dataStore = [];
	}

	add (data) {
		const finder = this.dataStore.find(item => item === data);
		const existence = Boolean(finder);
		if (!existence) {
			this.dataStore.push(data);
		}
		return !existence;
	}

	remove (data) {
		const position = this.dataStore.indexOf(data);
		if (position > -1) {
			this.dataStore.splice(position, 1);
			return true;
		}
		return false;
	}

	show () {
		return this.dataStore;
	}

	contains (data) {
		if (this.dataStore.indexOf(data) > -1) {
			return true;
		}
		return false;
	}
	
	union (set) {
		const result = new Set();
		this.dataStore.forEach(element => {
			result.add(element);
		});
		set.show().forEach(element => {
			if (!result.contains(element)) {
				result.add(element);
			}
		});
		return result;
	}

	intersect (set) {
		const result = new Set();
		this.dataStore.forEach(element => {
			if (set.contains(element)) {
				result.add(element);
			}
		});
		return result;
	}

	subset (set) {
		if (this.size() > set.size()) {
			return false;
		}
		const including = (child) => {
			return set.contains(child);
		};
		return this.dataStore.every(including);
	}
	
	size () {
		return this.dataStore.length;
	}

	difference (set) {
		const result = new Set();
		const diff = set.dataStore.filter(child => !this.contains(child));
		diff.forEach(item => result.add(item));
		return result;
	}
}

module.exports = Set;