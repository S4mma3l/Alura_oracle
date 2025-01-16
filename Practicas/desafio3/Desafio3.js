//Desafio 2
// reto uno

let initialNumber = 1;
let finalNumber = 10;

while (initialNumber <= finalNumber) {  // <= para incluir el 10
  alert(initialNumber);
  initialNumber++; // Incrementamos el contador en cada iteración
}

// reto dos

let initialNumber2 = 10;
let finalNumber2 = 0

while (initialNumber2 >= finalNumber2) {  // <= para incluir el 0
  alert(initialNumber2);
  initialNumber2--; // Disminuye el contador en cada iteración
}

// reto tres

let userNumber = prompt("Ingrese un numero, para iniciar la cuenta regresiva:");


while (userNumber >= 0) {
  console.log('Cuenta regresiva ' + userNumber);
  userNumber --;
}

// reto cuatro 

let userNumber2 = prompt("Ingrese un numero, para iniciar la cuenta progresiva:");

let contador = 0;

while (contador <= userNumber2) {
  console.log('Cuenta progresiva ' + contador);
  contador ++;
}