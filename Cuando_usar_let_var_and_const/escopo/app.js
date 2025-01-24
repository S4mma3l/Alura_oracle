var niNombre ='Angel'; // anade la variable en el objeto local sin embargo let no lo hace

console.log(niNombre); // Angel
console.log(window) // window

function MostarNombre(){
    var nombre = 'Angel';
    console.log(nombre); // Angel
}

MostarNombre();

function mostarMiApellido() {
    var miApellido = 'Hernandez';
    console.log(miApellido); // Hernandez
}

mostarMiApellido();


if (true) {

    const edad = 30; // const no permite reasignar valores
    let nombre = 'Angel'; // let permite reasignar valores
    var apellido = 'Hernandez'; // var permite reasignar valores
    
}

console.log(apellido); // Hernandez
console.log(nombre); // Uncaught ReferenceError: nombre is not defined
console.log(edad); // Uncaught ReferenceError: edad is not defined