const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Water', () => {
  console.log('Turn off the Water ');

  setTimeout(()=>{
      console.log('Please turn off the water moter this is gentel Remainder');
  },2000)
});
myEmitter.emit('Water');
console.log('Code is still running');