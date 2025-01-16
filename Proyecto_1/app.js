// variables
let numeroSecreto = 5;

let numeroUsuario = 0;

let intentos = 1;  // variable intentos

let palabraVeces = 'vez'; 

while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

    console.log(numeroUsuario);

    /* este codigo realiza
    la comparacion
    */

    if (numeroUsuario == numeroSecreto) {
        // acertamos que fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo realizaste en ${intentos} ${palabraVeces}.`); // interpolacion se realiza con comillas invertidas
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos = intentos + 1; // uso de la variable intentos y se le suma 1 si se repite el while hasta acertar
        palabraVeces = 'veces'; // si es mas de una ves se emplea la palabra veces
        if (intentos > 3) {
            alert('llegaste al numero maximo de intentos');
            break; // se termina el while
        }
        // la condicion no se cumplio
        // alert('Lo siento no acertaste el numero');
    } 

} // fin del while esto lo que hace es repetir el codigo hasta que se cumpla la condicion