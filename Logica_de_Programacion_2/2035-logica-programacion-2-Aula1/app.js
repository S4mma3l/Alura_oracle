/* 
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bienvenido al mundo dev'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';  /* esta es una forma de asigna algunos texto 
pero no es practico, en codigo donde se debe de repetir varias veces, por eso se crea una funcion 
*/

let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

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
    return;
}

function generarNumeroSecreto() { 
    return Math.floor(Math.random()*10)+1; /* variable para generar un numero aleatorio entre 1 y 10 */
}

asignarTextoElemento('h1', 'Bienvenido al mucho DEV')
asignarTextoElemento('p', 'Indica un numero del 1 al 10')