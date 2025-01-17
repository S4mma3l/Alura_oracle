/*
let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
  }
}
*/


let numeroSecreto2 = Math.floor(Math.random() * 10);
let intentos2 = 0;
while (intentos2 < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos2++;
  if (intento == numeroSecreto2) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto2}`);
    break;
  }
}


/*
let numeroSecreto3 = Math.floor(Math.random() * 10);
for (let intentos3 = 0; intentos3 < 5; intentos3++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto3) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto3}`);
  }
}
*/

let numeroSecreto4 = Math.floor(Math.random() * 10);
for (let intentos4 = 0; intentos4 < 5; intentos4++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto4) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto4}`);
    break;
  }
}