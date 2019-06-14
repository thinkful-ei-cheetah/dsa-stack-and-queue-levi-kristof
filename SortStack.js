'use strict';
const Stack = require('./stack');

const stack = new Stack();
stack.push(9);
stack.push(23);
stack.push(100);
stack.push(5);
stack.push(5);
stack.push(120);
stack.push(150);

display(sortStack(stack));

// sortStack(stack);

function sortStack(inputStack, tempStack = null, tempVar = null){
  if (tempStack === null){
    tempStack = new Stack();
  }

  if (inputStack.top === null){
    inputStack = tempStack;
    return inputStack;
  }

  tempVar = inputStack.pop();
  if (tempStack.top === null || tempVar < tempStack.top.data) {
    tempStack.push(tempVar);
    return sortStack(inputStack, tempStack);
  }  else {
    while (tempStack.top !== null && tempVar > tempStack.top.data){
      inputStack.push(tempStack.pop());
    }
    tempStack.push(tempVar);
    return sortStack(inputStack, tempStack);
  }
}




// . Sort stack
// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

function display(stack){

  let node = stack.top
  let order = 0
  while(node !== null){
    console.log(order, node.data)
    order++
    node = node.next
  }
}