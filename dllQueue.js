'use strict';

class _Node {
  constructor(value){
    this.value = value,
    this.next = null;
    this.previous = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);

    if(this.first === null){
      this.first = node;
    }

    if(this.last){   
      this.last.next = node;
      node.previous = this.last;
    }
    this.last = node;
  }


  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (this.first !== null) {
      this.first.previous = null;
    }
    
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}  


const queue = new Queue();

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
queue.enqueue('e')
queue.enqueue('f')

function display(stack){
  let node = stack.first;
  let order = 0
  while(node !== null){
    console.log(order, node.value)
    order++
    node = node.next
  }
}

display(queue);

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())