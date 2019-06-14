'use strict';

class _Node {
  constructor(value){
    this.value = value,
    this.next = null;
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
    }
    this.last = node;
  }
  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function teller(queue){
  let paperworkIsOk = Math.floor(Math.random() * 100)

  if(paperworkIsOk > 25){
    return queue.dequeue()
  }
  else{
    let walkOfShame = queue.dequeue()
    queue.enqueue(walkOfShame)
    return 'nobody'
  }
}

module.exports = {
  Queue,
  teller,
}
