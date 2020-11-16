// function getquantityN(n) {
//   return (n*(n+1))/2
// }

// const resultado = getquantityN(3)
// console.log(resultado)


// recursividad
function getquantityN(n) {
  return (n <= 1) ? n : n + getquantityN(n-0.1)

  // if (n===1) {
  //   return n
  // }
  // else {
  //   return n + getquantityN(n-1) 
  // }
}

const resultado = getquantityN(100000)
console.log(resultado)
// 354322
// =>  3 + getquantityN(2)
// =>  3 + 2 + getquantityN(1)
// =>  3 + 2 + 1 
          // =>  3 + 2 + 1 + 0 + getquantityN(-1)


// const nuevaF = getquantityN

// nuevaF(10)