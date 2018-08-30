const Set = require('./Set');

const cis = new Set();
cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');
var dmp = new Set();
dmp.add('Raymond');
dmp.add('Cynthia');
dmp.add('Jonathan');
const it = cis.union(dmp);
console.log(it.show());
