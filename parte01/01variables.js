var apellido = "suarez"
  // re declarable 
  var apellido = "torres"
  // re asignable 
  apellido = "suarez"
let nombre = "Ruth"
// no re declarable 
    // let nombre = "ruth" X 
  // si re asignable 
  nombre = "ruth"
const nacimiento = 1997
// no re declarable 
// no re asignable 

const miArray = []

// miArray.push("hola")
// miArray.push("hola")
// miArray.push("hola")
// miArray.push("hola")

console.log(miArray)


let template = `<h1>Hola que tal</h1>`

const parrafo = '<p>Algo de texto aqui</p>'

// el nuevo valor(template) = valor anterior(template) +  algo concatenado
template = template + parrafo
template += parrafo
template += "aalgo"
console.log(template)

// undefined 
// null 
// int 
// String
// Boolean
// array 
// object 
// var 