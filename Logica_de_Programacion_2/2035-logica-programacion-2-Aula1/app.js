/* 
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bienvenido al mundo dev'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';  /* esta es una forma de asigna algunos texto 
pero no es practico, en codigo donde se debe de repetir varias veces, por eso se crea una funcion 
*/

let numeroSecreto = 0;
console.log(numeroSecreto);

let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDelUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDelUsuario);
    console.log(numeroDelUsuario === numeroSecreto); /* el simbolo === es que tiene que ser igual en valor y en tipo de dato */
    console.log(intentos);

    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`); /* operador ternario */
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no hacerto el numero secreto
        if (numeroDelUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() { 
    return Math.floor(Math.random()*10)+1; /* variable para generar un numero aleatorio entre 1 y 10 */
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Bienvenido al mucho DEV');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja de texto
    limpiarCaja();
    // indicar mensaje de intervalo de numeros 
    // generar un nuevo numero secreto
    // inicializar los intentos
    condicionesIniciales();
    // deshabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', true); /* se deshabilita el boton */
}

condicionesIniciales(); /* se llama la funcion para que se ejecute */