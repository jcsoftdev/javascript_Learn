let numero1 = 15;
let numero2 = 20;
// if / else
if (numero1 < numero2) {
  console.log("estoy en el condicional if");
  let algo = "otro algo";
  console.log(algo);
} else {
  console.log("estoy en el else");
}


const getNumero15 = () => {
  return 15
}

// otra forma

numero1 === 14 && console.log("Otra formita");

// operador ternario

numero1 === 15 ? console.log(`${getNumero15()} === 15`) : console.log("No es un 15");

let valor = 17

switch (valor) {
  case 15:
    console.log("es 15")
    break;
  case 16:
    console.log("es 16")
    break;

  default:
    console.log("es otro numero")
    break;
}


const getTrue = () => {return true}

let contador = 0

while (contador < 10) {

  console.log("estoy en el while "+ (contador+1))
  contador ++
}

do {
  console.log("EL contador tiene el valor "+ contador)
  contador ++
} while (contador < 10);