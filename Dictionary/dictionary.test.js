const Dictionary = require('./Dictionary');

const contact = new Dictionary();
contact.add('Queen', '100');
contact.add('Charles', '123');
contact.add('X', '234');
console.log('Number of entries:', contact.count());
console.log('Queen\'s extension:', contact.find('Queen'));
contact.showAll();
contact.clear();
console.log('Number of entries:', contact.count());
