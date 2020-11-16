let pablo = [14, 8, 16];
let maria = [12, 18, 10];

let promedioPablo = (pablo[0] + pablo[1] + pablo[2]) / 3;
let promedioMaria = (maria[0] + maria[1] + maria[2]) / 3;

promedioPablo > 13
  ? console.log("Pablo Está aprobado "+ promedioPablo)
  : console.log("Pablo Está jalado " + promedioPablo);
promedioMaria > 13
  ? console.log("Maria Está aprobado " + promedioMaria)
  : console.log("Maria Está jalado " + promedioMaria);
