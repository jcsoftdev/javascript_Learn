// ECMASCRIPT
// ES6

// declaración de variables 

// boolean -> true/ false 
// string -> palabras
// Number -> numeros
// flotantes -> numeros con decimales 
// Array -> lista de elementos 
// objetos -> ... 
// null 
// undefined 
// function

let nombreDeVarible = 'Jurguen'
// let nombreDeVarible = 'Rambo'//mal
nombreDeVarible = 'Rambo'//ok

const otraVariable = 'Jurguensito'
otraVariable = 'Jordan'//mal-> no se puede reasignar a const


function caminar(params) {
  // code 

  // siempre pero siempre debe retornar algo
  return null
}

const correr = (params) => { 
  // code 
  return null
}


const person = {
  nombre: 'Juan Carlos',
  edad: '19',
}



const flores = [
  {
    nombre: "clavel",
    colores: ['blanco', 'rojo', 'amarillo', 'morado', 'mezclados'],
    precio: 4.5
  },
  {
    nombre: "margarita",
    colores: ['blanco', 'amarillo', 'naranja', 'roja'],
    precio: 15.5
  },
  {
    nombre: "rosa",
    colores: ['blanco', 'rojo', 'amarillo', 'morado', 'rosado', 'naranja', 'azul'],
    precio: 20.5
  },
]
// if 

  // if (flores[0].precio > 10) {
  //   console.log('No tienes suficiente dinero')
  // }else {
  //   console.log('Te alcanza para comprar')
  // }

// for 

const myMoney = 20

// for (let item = 0; item < flores.length; item++) {
  
//   if (flores[item].precio < myMoney) {
//     console.log('Si me alcanza!!! para ->' + flores[item].nombre)
//   }
// }

// forEach 
// flores.forEach((item)=>{
//   if (item.precio < myMoney) {
//     console.log('Si me alcanza!!! para ->' + item.nombre)
//   }
// })


// let numero = 2

// while (numero < 100) {
//   console.log(numero)


//   numero = numero + 2
// }


// let numero = 2

// do {
//   console.log(numero)
//   numero = numero + 2
// } while (numero<100);


// switch 

// let sexo = 'Otro'

// switch (sexo) {
//   case "F":
//     console.log('Soy Mujer')
//     break;
//   case "M":
//     console.log('Soy Varon')
//     break;

//   default:
//     console.log('No sé que sexo tengo')
//     break;
// }


