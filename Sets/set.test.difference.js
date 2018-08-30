const Set = require('./Set');

const cis = new Set();
const it = new Set();
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Danny');
it.add('Bryan');
it.add('Clayton');
it.add('Jennifer');
const difference = cis.difference(it);
console.log(cis.show(), 'difference', it.show(), '->', difference.show());
