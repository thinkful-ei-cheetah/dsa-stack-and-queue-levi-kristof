const { matchingExpressions } = require('./stack')

function arithmetic(){
  // console.log(matchingExpressions(`((((2+2)))`))
  // console.log(matchingExpressions(`({2+2)`))
  // console.log(matchingExpressions(`({2+2})`))
  console.log(matchingExpressions(`({2+2}])`))
}

arithmetic()