let etiqueta = document.querySelector('h1');
etiqueta.innerHTML = 'Hora del Desafía';

function consoleClick() {
alert('El boton Console fue clickeado');
}

function ubicacionClick() {
    ubicacion = prompt('Por favor, Indique una ciudad de Costa Rica:');
    if (ubicacion == null || ubicacion == '') { /* barra recta alt +124 */
        alert('No ingresaste una ciudad');
        return;
    }
    alert(`Estuve en ${ubicacion} y me acorde de ti`); /* comilla invertida alt + 96 */
}

function alertaClick(){
    alert ('I love JS');
}

function sumaClick() {
    let num1 = parseInt(prompt('Por favor, ingresa un numero:'));
    let num2 = parseInt(prompt('Por favor, ingresa otro numero:'));
    if (isNaN(num1) || isNaN(num2)) {
        alert('No ingresaste un numero, por favor ingresalos');
        return;
    }
    let resultado = num1 + num2;
    alert(`El resultado al sumar los numero que te pedi es de: ${resultado}, espero que te haya gustado`)
}