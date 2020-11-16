const persona = {
  nombre: "Ruth",
  apellido: "Suarez",
  edad: 23,
  direccion: "jr la Union 501",
};
const character = {
  nombre: "JC",
  apellido: "VL",
  edad: 19,
  direccion: "Av Hvca",
};

// (function(){console.log("Hola")})()

// ((param1, param2) => {
//   console.log('Hola soy una f flecha', param1, param2)
// })()

// function getNombre(personaParam={}) {
//   return personaParam.nombre
// }

const getNombre = (persona) => persona.nombre;

// const getApellido = function (objectParam){ return objectParam.apellido }
const getApellido = (persona) => persona.apellido;

// el parametro (persona) de la funcion es como declarar una variable
// const getEdad = (persona) => {return persona.edad}
const getEdad = (persona) => persona.edad;
const getDireccion = (persona) => persona.direccion;

// el parametro (persona) es un dato
let nombre = getNombre(persona); //=> 'Ruth'
let apellido = getApellido(persona); //=> 'Suarez'
let edad = getEdad(persona); //=> '23'
let direccion = getDireccion(persona); //=> 'Jr ...'

console.log(`${nombre} ${apellido}, de ${edad} años. ${direccion}`);