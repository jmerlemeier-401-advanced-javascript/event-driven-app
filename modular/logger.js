'use strict';

const events = require('./events');

events.on('save', payload => log('save', payload));
events.on('delete', payload => log('delete', payload));
events.on('update', payload => log('update', payload));


//event is 'save' abd the payload is whatever is passed in on the emission
function log(event, payload) {
  let time  = new Date();
  console.log({ event, time, payload });
}