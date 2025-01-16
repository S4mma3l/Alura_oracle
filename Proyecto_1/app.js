let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

console.log(numeroUsuario);

/* este codigo realiza
la comparacion
*/

if (numeroUsuario == numeroSecreto) {
    // acertamos que fue verdadera la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}`); // interpolacion se realiza con comillas invertidas
} else {
    // la condicion no se cumplio
    alert('Lo siento no acertaste el numero');
} 
