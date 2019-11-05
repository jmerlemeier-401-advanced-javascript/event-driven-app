'use strict';

const fs = require('fs');

/**
 * 
 * @param {*} file 
 */
const alterFile = (file) => {
  fs.readFile( file, (err, data) => {//util.promisify
    if(err) { throw err; }
    let text = data.toString().toUpperCase(); //could be broken down.
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
      //eventemitter.emit()
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);

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
