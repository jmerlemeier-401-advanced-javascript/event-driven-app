'use strict';

const events = require('./events');

events.on('save', payload => log('save', payload));

//event is 'save' abd the payload is whatever is passed in on the emission
function log(event, payload) {
  let time  = new Date();
  console.log({ event, time, payload });
}