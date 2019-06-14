const { Queue } = require('./queue-using-stacks')

function myQueue(){
  const newQueue = new Queue()

  newQueue.enqueue('Kirk')
  newQueue.enqueue('Spock')
  newQueue.enqueue('McCoy')
  newQueue.enqueue('Scotty')
}

myQueue()