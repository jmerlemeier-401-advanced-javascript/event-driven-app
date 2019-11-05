'use strict';

const events = require('./events');
// const EventEmitter = new Events();

//loggin activity to the console
const logger = require('./logger');

//handle our data cache


//'save' is the flag and then the string is the payload response.
//Great for automated systems.
events.emit('save', 'Jacob is super rad');

