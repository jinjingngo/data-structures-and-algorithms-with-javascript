class Heap {
	/**
	 * Minimum heap constructor.
	 * @public
	 * @constructor
	 * @param {Function} comparison Function used for comparison between the elements
	 */
	constructor (comparison) {
		this._heap = [];
		if (typeof comparison === 'function') {
			this._comparison = comparison;
		} else {
			this._comparison = (a, b) => { a - b; };
		}
	}

	/**
	 * Exchange indexes with start inde xgiven as argument
	 * to turn the tree into a valid heap. On a single call
	 * this method maintains only a single "branch" of the heap
	 * 
	 * @private
	 * @param {Number} index The parent.
	 */
	_heapify (index) {
		let temp;
		let extr = index;
		const left = 2 * index + 1;
		const right = 2 * index + 2;
		if (left < this._heap.length 
				&& this._comparison(this._heap[left], this._heap[index]) > 0) {
			extr = left;
		}

		if (right < this._heap.length 
				&& this._comparison(this._heap[right], this._heap[index]) > 0
				&& this._comparison(this._heap[right], this._heap[left]) > 0) {
			extr = right;
		}

		if (index !== extr) {
			temp = this._heap[index];
			this._heap[index] = this._heap[extr];
			this._heap[extr] = temp;
			this._heapify(extr);
		}
	}
}