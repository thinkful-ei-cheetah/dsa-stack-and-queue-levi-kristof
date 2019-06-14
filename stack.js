class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data){
    if(this.top === null){
      this.top = new _Node(data, null)
      return this.top
    }
    const node = new _Node(data, this.top)
    this.top = node
  }
  pop(){
    const node = this.top
    this.top = node.next
    return node.data
  }
}

function peek(stack){
  return console.log(`Top = ${stack.top.data}, Top.next = ${stack.top.next.data}`)
}

function isEmpty(stack){
  return console.log(!stack.top)
}

function display(stack){
  let node = stack.top
  let order = 0
  while(node !== null){
    console.log(order, node.data)
    order++
    node = node.next
  }
}

function matchingExpressions(str){
  let allGood = true
  let expressions = {
    '(': ')',
    '[': ']',
    '{': '}',
    "'": "'",
    '"': '"'
  }
  let tempStack = new Stack()
  for(let i = 0; i < str.length; i++){
    let open = Object.keys(expressions).includes(str[i])
    if(open){
      console.log(`inputing => ${str[i]}${i}`)
      tempStack.push(`${str[i]}${i}`)
    }
    else {
      let close = Object.values(expressions).includes(str[i])
      if (close && (tempStack.top === null)){
        console.log(``)
        return false
      }
      else if(close){
        open = tempStack.pop()
        if(expressions[open[0]] !== str[i]){
          console.log(`${open[0]} at pos ${open[1]}, does not match ${str[i]} at pos ${i}`)
          return false
        }
      }
    }
    // if(str[i] === '('){
    //   console.log(`pushing "(" into tempStack`)
    //   tempStack.push(i)
    // }
    // else if((str[i] === ')') && (tempStack.top === null)){
    //   console.log(`missing "(" at position ${i}`)
    //   allGood = false
    //   return allGood
    // }
    // else if(str[i] === ')'){
    //   console.log(`popping "(" from tempStack`)
    //   tempStack.pop()
    // }
  }
  if(tempStack.top !== null){
    while(tempStack.top !== null){
      let open = tempStack.pop()
      console.log(`Extra "${open[0]}" at position ${open[1]}`)
    }
    allGood = false
  }
  return allGood
}

module.exports = {
  Stack,  
  peek,
  isEmpty,
  display,
  matchingExpressions,
}