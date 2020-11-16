//  0 1 1 2 3 5 8 13 ....
//  1 2 3 4 5 6 7 8  <-- indice 



// getFibonacci(n=5)=> return getFibonacci(n-1) + getFibonacci(n-2)
// getFinobacci(4)                     + getFibonacci(3)
// (getFibonacci(3) + getFibonacci(2) )+ (getFibonacci(2) + getFibonacci(1))

// condicion => si el indice n es dos entonces retorna un 1
// condicion => si el indice n es uno entonces retorna un 0

// (getFibonacci(3) + getFibonacci(2) )+ (getFibonacci(2) + getFibonacci(1))
// (getFibonacci(3)                   + 1 )+ (1 + 0)
// (getFibonacci(2) + getFibonacci(1) + 1 )+ (1 + 0)
// (1 + 0 + 1)+ (1+0)