const { Queue, teller } = require('./queue')

function OphidianBank() {
  const bankQueue = new Queue()
  bankQueue.enqueue(1)
  bankQueue.enqueue(2)
  bankQueue.enqueue(3)
  bankQueue.enqueue(4)

  console.log(`teller served ${teller(bankQueue)}`)
  console.log(`teller served ${teller(bankQueue)}`)
  console.log(`teller served ${teller(bankQueue)}`)
  console.log(`teller served ${teller(bankQueue)}`)
  console.log(bankQueue)
}

OphidianBank()