class Dictionary {
	constructor () {
		this.datasource = new Array();
	}

	add (key, value) {
		this.datasource[key] = value;
	}

	find (key) {
		return this.datasource[key];
	}

	remove (key) {
		delete this.datasource[key];
	}

	showAll () {
		Object.keys(this.datasource).sort().forEach(key => {
			console.log(key, '->', this.datasource[key]);
		});
	}

	count () {
		return Object.keys(this.datasource).length;
	}

	clear () {
		Object.keys(this.datasource).forEach(key => {
			delete this.datasource[key];
		});
	}
}

module.exports = Dictionary;