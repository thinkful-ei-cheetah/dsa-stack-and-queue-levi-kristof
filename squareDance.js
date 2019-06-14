'use strict';
const Queue = require('./queue');

const queue = new Queue();

queue.enqueue ({
  sex: 'F',
  Name: 'Jessie'
});
queue.enqueue ({
  sex: 'M',
  Name: 'John'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Jack'
});
queue.enqueue ({
  sex: 'F',
  Name: 'Jana'
});
queue.enqueue ({
  sex: 'F',
  Name: 'Jenna'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Mason'
});
queue.enqueue ({
  sex: 'F',
  Name: 'Frankie'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Jason'
});
queue.enqueue ({
  sex: 'F',
  Name: 'Kelsey'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Kristof'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Jamie'
});
queue.enqueue ({
  sex: 'F',
  Name: 'Hope Solo'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Chase'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Roberto'
});
queue.enqueue ({
  sex: 'M',
  Name: 'Steven'
});queue.enqueue ({
  sex: 'F',
  Name: 'Jennifer'
});queue.enqueue ({
  sex: 'M',
  Name: 'Kyle'
});queue.enqueue ({
  sex: 'M',
  Name: 'Tony'
});queue.enqueue ({
  sex: 'M',
  Name: 'Toby'
});queue.enqueue ({
  sex: 'F',
  Name: 'Cleo'
});queue.enqueue ({
  sex: 'F',
  Name: 'Tina'
});queue.enqueue ({
  sex: 'M',
  Name: 'Brad'
});queue.enqueue ({
  sex: 'F',
  Name: 'Jessica'
});

function pairPartner(queue){
  const maleQueue = new Queue();
  const femaleQueue = new Queue();

  while (queue.last !== null){
    const next =  queue.dequeue();
    if (next.sex === 'F'){
      femaleQueue.enqueue(next.Name);
    } else maleQueue.enqueue(next.Name);
  }
  while (femaleQueue.last !== null && maleQueue.last !== null){
    console.log(femaleQueue.dequeue() + ' will dance with ' + maleQueue.dequeue());
  }

  if(femaleQueue.last !== null){
    console.log( `There are ${queueCount(femaleQueue)} women left to dance`);
  }

  if(maleQueue.last !== null){
    console.log(`There are ${queueCount(maleQueue)} men left to dance`);
  }

  function queueCount(queue){
    if (queue.last === null){
      return 0;
    }

    let counter = 1;
    let tempNode = queue.first;

    while (tempNode.next !== null){
      counter++;
      tempNode = tempNode.next;
    }
    return counter;
  }
}

pairPartner(queue);
