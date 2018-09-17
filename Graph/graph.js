class Graph {
	constructor (v) {
		this.vertices = v;
		this.edges = 0;
		this.adj = [];
		this.marked = [];
		this.edgeTo = [];
		for (let i = 0; i < this.vertices; i++) {
			this.adj[i] = [];
			this.adj[i].push('');
			this.marked[i] = false;
		}
	}

	addEdge (v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	}

	showGraph () {
		for (let i = 0; i < this.vertices; i++) {
			const edges = this.adj[i];
			const vertices = edges.filter(v => v);
			const format = vertices.reduce((accumulator, vertex, index) => { return accumulator + (index > 0 ? ` ${vertex}` : `${vertex}`);}, '');
			console.log(i, '->', format);
		}
	}

	depthFristSearch (v) {
		this.marked[v] = true;
		if (this.adj[v] !== undefined) {
			console.log('Visited vertex:', v);
		}
		if (this.adj[v]) {
			this.adj[v].forEach(w => {
				if (!this.marked[w]) {
					this.depthFristSearch(w);
				}
			});
		}
	}

	breadthFirstSearch (s) {
		const queue = [];
		this.marked[s] = true;
		queue.push(s);
		while (queue.length > 0) {
			const v = queue.shift();
			if (v === undefined) {
				console.log('Visited vertex: ', v);
			}
			if (this.adj[v]) {
				this.adj[v].forEach(w => {
					if (!this.marked[w]) {
						this.edgeTo[w] = v;
						this.marked[w] = true;
						queue.push(w);
					}
				});
			}
		}
	}
}

module.exports = Graph;