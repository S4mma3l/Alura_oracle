Willian está comenzando en el mundo de la programación y recientemente descubrió que existe una manera de ejecutar un bloque de comandos repetidamente mientras una condición preestablecida no se cumpla.

Animado por las posibilidades, decidió entrenar el uso de la estructura 'while()' en un proyecto personal de cálculo de medias aritméticas. Sin embargo, se encontró con un bucle infinito y no pudo descubrir por qué.

Sabiendo que tú también estás estudiando lógica de programación, Willian te pidió ayuda para localizar dónde está el error en su código:

let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Ingrese el numero:'));
    suma += numero;
}

let promedio = suma / cantidadNumeros;

console.log(promedio);

¿Qué cambio podrías sugerirle a Willian para que el código obtenga el resultado esperado? Elija la opción correcta:
Seleccione una alternativa

Cuando utilizamos bucles con contadores, debemos asegurarnos de que en algún momento alcancen la condición de parada del bucle. En el código anterior, el contador no tiene su valor alterado y para resolver el bucle infinito, simplemente debes incrementarlo en cada iteración, agregando la línea 'contador++' dentro del bucle.
Alternativa correta

El código presenta un bucle infinito porque la condición de parada no se ha definido correctamente. Para que el programa funcione como se espera, es necesario cambiar el código de manera que:

while(contador > cantidadDeNumeros){
    //Código omitido
}

Alternativa correta

El código presenta un bucle infinito porque las variables no alcanzan el valor de la condición de parada del bucle. Para resolver esto, simplemente debes agregar la línea 'cantidadDeNumeros++' dentro del bucle.
Alternativa correta

Cuando utilizamos bucles con contadores, debemos asegurarnos de que en algún momento alcancen la condición de parada del bucle. En el código anterior, el contador no tiene su valor alterado, y para resolver el bucle infinito, simplemente debes decrementarlo en cada iteración, agregando la línea 'contador--' dentro del bucle.

Al decrementar el valor de la variable contador en cada iteración, eventualmente será menor o igual a 0, lo que detendrá la ejecución del bucle.