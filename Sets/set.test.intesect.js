const Set = require('./Set');

const cis = new Set();
cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');
const dmp = new Set();
dmp.add('Raymond');
dmp.add('Cynthia');
dmp.add('Bryan');
const inter = cis.intersect(dmp);
console.log(inter.show());
