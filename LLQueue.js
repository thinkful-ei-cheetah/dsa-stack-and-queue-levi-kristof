'use strict';

const Queue = require('./queue');

let queue = new Queue();

queue.enqueue('Bob');
queue.enqueue('Spock');
queue.enqueue('Uhura');
queue.enqueue('Sulu');
queue.enqueue('Checkov');

function peek(queue){
  if (queue.first)
    console.log(queue.first);
  else return 'empty queue';
}
//peek(queue)

function isEmpty(queue){
  console.log('in here');
  return !queue.first;
}

//Levi solution
function display(stack){

  let node = stack.top;
  let order = 0;
  while(node !== null){
    console.log(order, node.data);
    order++;
    node = node.next;
  }
}

console.log(isEmpty(queue));




// 7. Create a queue class using Doubly linked List
// Use the items listed in #6 and enqueue them to your queue.

// Check to see who is first one on the Queue?