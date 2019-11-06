'use strict';

const fs = require('fs');

/**
 * fs.readFile(filename[, options], callback) - Asynchronously reads the entire contents of a file.
 * @param {string} filename
 * @param {function} callback - (err, data) 
 * @returns raw buffer
 */
const readFile = (filename, callback) => {
  fs.readFile( file, (err, data) => {//util.promisify
    if(err) throw err;
    console.log(data); //data is the contents of the file.
  });  
};


//2. 
function upperCase(data){
  let text =  data.toString().toUpperCase();
  fs.writeFile(file, text);
}


/**
 * fs.writeFile(filename, data[, options], callback) - Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.
 * @param {string} filename
 * @param {String | Buffer} data 
 * @param {function} callback
 */
const writeFile = (filename, data, callback ) => {
  fs.writeFile( filename, data,(err, data) => {
    if(err) throw err;
    console.log(`${filename} saved`);
    //eventemitter.emit()
  });
};

let file = process.argv.slice(2).shift();


module.exports = {
  readFile,
  writeFile,
};




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
