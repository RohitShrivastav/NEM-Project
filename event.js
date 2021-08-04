const events = require('events');

let ev = new events.EventEmitter();

ev.on('my_event', (data)=>{
    console.log("event: ", data);
});

ev.emit('my_event', 'This is my data of first event');


ev.once('first_event', ()=> console.log("once even has been fired"));

ev.emit('first_event');