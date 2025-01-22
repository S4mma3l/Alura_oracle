// #1
let altura = prompt("Ingrese su altura en metros");
let peso = prompt("Ingrese su peso en kilogramos");

function calcularIMC() {
  let alturaM2 = altura * altura;
  let imc = peso / alturaM2;
  return imc;
}

alert("Su IMC es: " + calcularIMC());

// #2

let numero = prompt("Por favor ingrese un numero para obtener su factorial");

function valorFactorial() {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
  
}

alert("El factorial de " + numero + " es: " + valorFactorial());

// #3

let moneda = prompt("Ingrese el monto de colones, que desea convertir a dolares");

function convertirDolares() {
  let dolares = moneda / 506.87;
  return dolares;
}

alert("El monto de " + moneda + " colones equivale a " + convertirDolares() + " dolares");

// #4

let Largo = prompt("Ingrese el largo de la habitacion en metros");
let Ancho = prompt("Ingrese el ancho de la habitacion en metros");

function calcularPerimetro() {
  let perimetro = (Largo * 2) + (Ancho * 2);
  return perimetro;
}

alert("El perimetro de la habitacion es: " + calcularPerimetro() + " metros");

// #5

let radio = prompt("Ingrese el radio de la circunferencia en metros");

function calcularArea() {
  let area = Math.PI * (radio * radio);
  return area;
}

function calcularPerimetroCircunferencia() {
  let perimetro = 2 * Math.PI * radio;
  return perimetro;
}

alert("El area de la circunferencia es: " + calcularArea() + " metros cuadrados y el perimetro es: " + calcularPerimetroCircunferencia() + " metros");

// #6

let tablaNumero = prompt("Ingrese el numero de la tabla de multiplicar que desea ver");

function tablaDeMultiplicar(numero) {
  // Verificar si el número es válido
  if (typeof numero !== 'number' || isNaN(numero)) {
    console.log("Por favor, proporciona un número válido.");
    return;
  }

  // Mostrar la tabla de multiplicar
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Ejemplo de uso:
tablaDeMultiplicar(tablaNumero); 
