
// let nombre2 = getNombre(persona2)//=>'JC'
// const character = {
//   nombre: 'JC',
//   apellido: 'VL',
//   edad: 19,
//   direccion: 'Av Hvca'
// }

function Persona(params) {
  const persona = {
    nombre: "Ruth",
    apellido: "Suarez",
    edad: 23,
    direccion: "jr la Union 501",
  };
}

const getNombre = (persona) => persona.nombre;
const getApellido = (persona) => persona.apellido;
const getEdad = (persona) => persona.edad;
const getDireccion = (persona) => persona.direccion;

let nombre = getNombre(persona); //=> 'Ruth'
let apellido = getApellido(persona); //=> 'Suarez'
let edad = getEdad(persona); //=> '23'
let direccion = getDireccion(persona); //=> 'Jr ...'

console.log(`${nombre} ${apellido}, de ${edad} años. ${direccion}`);
// let nombre2 = getNombre(persona2)//=>'JC'
