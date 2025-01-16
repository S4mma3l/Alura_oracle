let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0) {
// while(contador > cantidadNumeros) {
    let numero = parseInt(prompt('Ingrese el numero:'));
    suma += numero;
    contador--; // Disminuye el contador en cada iteracion solucionando el bucle infinito
}

let promedio = suma / cantidadNumeros;

console.log(promedio);
