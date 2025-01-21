function mensajeBienvenida() {
    let bienvenida = "Hola, Mundo!";
    return bienvenida;
}

console.log(mensajeBienvenida()); //hola,mundo

function mensajeBienvenidaNombre(nombre) {
    let bienvenida = "Hola, " + nombre + "!";
    return bienvenida;
}
console.log(mensajeBienvenidaNombre("Angel")); //hola, Angel

function numeroDoble(numero) {
    let doble = numero * 2;
    return doble;
}
console.log(numeroDoble("2")); //4

function numeroTriple(num1, num2, num3) {
    let triple = num1 + num2 + num3;
    let promedio = triple / 3;
    return promedio;
}
alert(numeroTriple(2, 3, 4)); //24

function obtenerMayor(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
alert(obtenerMayor(15, 21)); //21
  
  // Ejemplo de uso
  let mayor = obtenerMayor(10, 5);
  alert(mayor); // Muestra 10

  function calcularCuadrado(numero) {
    let resultado = numero * numero;
    return resultado;
  }
  
  // Ejemplo de uso
  let cuadrado = calcularCuadrado(5);
  alert(cuadrado); // Muestra 25
alert(calcularCuadrado(5)); //25
