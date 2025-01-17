// variables
// let numeroSecreto = 5; // original con un numero fijado por nosotros
let numeroDeVeces = Math.floor(Math.random() * 1000) + 1; // numero aleatorio entre 1 y 10

let numeroSecreto = Math.floor(Math.random() * numeroDeVeces) + 1; // numero aleatorio entre 1 y 100

let numeroUsuario = 0;

let intentos = 1;  // variable intentos

let palabraVeces = 'vez'; 

let maximosIntentos = Math.floor(Math.random() *10) + 5; // variable maximosIntentos

console.log(maximosIntentos);

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {

    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroDeVeces} por favor: `)); // con el parseInt se convierte el string en un numero entero

    console.log(typeof(numeroUsuario)); // con typeof se muestra el tipo de dato

    /* este codigo realiza
    la comparacion
    */

    if (numeroUsuario == numeroSecreto) {
        // acertamos que fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo realizaste en ${intentos} ${palabraVeces}.`); // interpolacion se realiza con comillas invertidas
        // alert(`Acertaste, el numero es: ${numeroUsuario}. Lo realizaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`); // operador ternario
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos = intentos + 1; // uso de la variable intentos y se le suma 1 si se repite el while hasta acertar
        // intentos += 1; // otra forma de escribir la linea anterior
        // intentos++; // otra forma de escribir la linea anterior

        palabraVeces = 'veces'; // si es mas de una ves se emplea la palabra veces
        if (intentos > maximosIntentos) {
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break; // se termina el while
        }
        // la condicion no se cumplio
        // alert('Lo siento no acertaste el numero');
    } 

} // fin del while esto lo que hace es repetir el codigo hasta que se cumpla la condicion