const logEvents = require('./logEvents');
const EventEmitter = require('events');  

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  console.log('an event occurred!');
  logEvents(msg);
});
myEmitter.emit('log', 'log event emitted');  
