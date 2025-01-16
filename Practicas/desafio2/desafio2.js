//Desafio 2
// reto uno

let diaSemana = prompt("que dia de la semana es hoy?");

if (diaSemana.toLocaleLowerCase() === "sabado" || diaSemana.toLowerCase() === "domingo" ) {
  alert("¡Buen fin de semana!");
} else  {
  alert("¡Buena semana!");
}

// reto dos

let userNumber = prompt("Ingrese un numero, por favor: ");

if (userNumber >= 0) {
  alert("Tu numero es positivo.");
} else {
  alert("Tu numero es negativo.");
}

// reto tres

let puntosDelJuego = prompt("Ingresa la cantidad de puntos que obtuviste en tu juego, por favor:");

if (puntosDelJuego >= 100) {
  alert("Felicidades, has ganado!");
} else {
  alert("Intentalo nuevamente para ganar!")
}

// reto cuatro

let saldoCuenta = ("72000")

alert("El saldo en tu cuenta es de: " + saldoCuenta);

// reto cinco
const userName = prompt("Por favor, brindame tu nombre:");

alert("Bienvenido/a " + userName + "!");