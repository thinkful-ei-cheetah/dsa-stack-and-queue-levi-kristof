const { Stack } = require('./stack')

const firstStack = new Stack()
const lastStack = new Stack()


// | |   |A|
// | |   |B|
// | |   |C|
// last  first

class Queue {
  constructor(){
    this.first = firstStack;
    this.last = lastStack;
  }
  enqueue(data){
    if(this.first.top){
      while(this.first.top){
        this.last.push(this.first.pop())
      }
    }
    this.last.push(data)
    while(this.last.top){
      this.first.push(this.last.pop())
    }
  }
  dequeue(){
    return this.first.pop()
  }
}

module.exports = {
  Queue,
}