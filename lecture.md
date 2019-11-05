# class 16

## Event Based Systems

```js

//All these systems use the same series of events:
//Observer Pattern: When something happens => To this specific thing => do specific thingin response.

//Browser event
// document in browser is an subject.
document.addEventListener('DOMContentLoaded', doSomething);

//JQuery
$('button').on('click', handleClick);

//Express
app.listen();
app.get('/images', handleFetch);
```

## Observer Pattern:

  - Standaradized design in CS.
  - Something called a "subject" maintians a list of dependencies called "observes"
- Publisher/Subscriber Model.
- one publishes events.
  - the other subscripbes to those events.
  - Neither cares abut the other objects context.

## Node Events Module:  

- library that deals specifically with the Pub/Sub design pattern
- We define a list of events that other services can subscribe to. 

```js
//getting access to events library
const events = require('events');

//instantiating a variable as an instance of that library.
const EventEmitter = new events();

EventEmitter.on('Messages', () => {
  console.log('Hey a message was sent');
})

//OR
EventEmitter.on('Messages', handleMessages);
EventEmitter.on('Messages', http.post('api.facebook.com'));
EventEmitter.on('Signin', handleMessages);
EventEmitter.on('Signout', handleMessages);


//on the other end
EventEmitter.emit('Messages', {username: 'Jacob', message: 'Oh hey hey'});

```



## Example app.js

```js
const Events = require('events');
const EventEmitter = new Events();


let data = [
  { id: 100, data: 'Julie' },
  { id: 77, data: 'Is cool' }
]


EventEmitter.on('log', payload => log('log', payload))
EventEmitter.on('save', (payload) => {
  console.log(`Record ${payload.id} was saved`)
  EventEmitter.emit('log', payload);
})
EventEmitter.on('delete', handleDelete);

function log(event, payload) {
  let time = new Date();
  console.log({event, time, payload});
}

function handleDelete(payload){
  data = data.filter(item => {
    return item.id !== payload.id;
  })
  console.log(data);
}

EventEmitter.emit('save', { id: 100 });
EventEmitter.emit('delete', { id: 77 });

```
