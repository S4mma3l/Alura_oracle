// reto # 1
let mensajeBienvenida = "Bienvenidos al desafio # 4 de logica de programacion";
console.log(mensajeBienvenida);

// reto # 2

let nombre = "Angel";
console.log(`Hola, ${nombre} bienvenido al desafio # 4 de logica de programacion.`);

// reto # 3

alert (`Hola, ${nombre} bienvenido al desafio # 4 de logica de programacion.`);

// reto # 4

let primeraPregunta = prompt("Cual es el lengua de programacion que mas te gusta?");

console.log(`Tu respuesta fue: ${primeraPregunta}`);

// reto # 5

let valor1 = parseInt(38);
let valor2 = parseInt(23);

let resultado = (valor1 + valor2);
console.log(`El resultado de la suma de ${valor1} + ${valor2} es: ${resultado}`);

// reto # 6

let valor3 = parseInt(38);
let valor4 = parseInt(23);

let resultado2 = (valor3 - valor4);
console.log(`El resultado de la resta de ${valor3} - ${valor4} es: ${resultado2}`);

// reto # 7

let edadUsuario = prompt("Cual es tu edad?");

if (edadUsuario >= 18) {
    alert(`Eres mayor de edad tu edad es: ${edadUsuario}`);
} else {
    alert(`Eres menor de edad tu edad es: ${edadUsuario}`);
}

// reto # 8

let numero2 = prompt("Ingresa un numero");

if (numero2 >= 0) {
    alert(`El numero ${numero2} es positivo`);
} else {
    alert(`El numero ${numero2} es negativo`);
}

// reto # 9

let numero3 = "1";

while (numero3 <= 10) {
    console.log(`El numero es: ${numero3}`);
    numero3++;
}

// reto # 10

let nota = "38";

if (nota >= 0 && nota <= 7) {
    alert(`La nota ${nota} es aprobada`);
} else {
    alert(`La nota ${nota} es reprobada`);
}

// reto # 11

let numeroAleatorio = Math.floor(Math.random() + 1);
console.log(numeroAleatorio);

// reto # 12

let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio2);

// reto # 13

let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio3);