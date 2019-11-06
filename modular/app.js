'use strict';

const { readFile, writeFile } = require('./file-module');

// const alterFile = (file) => {
//   // 1. 
//   fs.readFile( file, (err, data) => {//util.promisify
//     if(err) { throw err; }

//     //2. 
//     let text = data.toString().toUpperCase(); 

//     //3. 
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//       //eventemitter.emit()
//     });
//   });
// };

// let file = process.argv.slice(2).shift();
// alterFile(file);

// refactoring checklist

let file = process.argv.slice(2).shift();
const text = readFile(file);
writeFile(text);




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
