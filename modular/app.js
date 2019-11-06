'use strict';

const { readFile, writeFile } = require('./file-module');
require('./file-events');


let file = process.argv.slice(2).shift();
const text = readFile(file);
// .then(writeFile);
// const write = writeFile(file, data);




//================ from lecture ================
// const events = require('./events');
// // const EventEmitter = new Events();

// //loggin activity to the console
// require('./logger');

// //handle our data cache
// require('./cache');

// //'save' is the flag and then the string is the payload response.
// //Great for automated systems.
// events.emit('save', {id: 01, content: 'Jacob is super rad'});
// events.emit('delete', {id: 01, content: 'Jacob is super rad'});
