const {
  Stack,  
  peek, 
  isEmpty, 
  display
} = require('./stack');

function starTrek(){
  const stStack = new Stack()

  stStack.push('Kirk')
  stStack.push('Spock')
  stStack.push('McCoy')
  stStack.push('Scotty')
  // peek(stStack)
  // isEmpty(stStack)
  display(stStack)
}

starTrek()