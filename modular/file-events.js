'use strict';

const EventEmitter = require('./events');

//listeners, subscribers, logger
EventEmitter.on('file-read', (payload) =>{
  console.log('file is read');
});

//logger
EventEmitter.on('file-uppercase', (payload) =>{
  console.log('file is now in uppercase');
});

//logger
EventEmitter.on('file-write', () =>{
  console.log('file is ');
})

