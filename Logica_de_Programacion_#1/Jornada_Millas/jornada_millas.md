Eres una persona recién llegada al equipo de desarrollo de Jornada Millas, un sitio web de compra de paquetes de viaje para los principales destinos del mundo.

Como primera tarea, tu lider te ha pedido que al introducir un número por teclado, muestre un mensaje en la consola que indique si el número es positivo, negativo o cero.

Selecciona la opción correcta:

const numero = prompt("Introduce un número:");

if (numero != 0) {
  console.log("El número es positivo o negativo");
} else {
  console.log("El número es cero");
}

Alternativa correta

const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

Si numero es mayor que 0, se ejecuta la primera instrucción y se muestra el mensaje "El número es positivo". Si numero es menor que 0, se ejecuta la segunda instrucción y se muestra el mensaje "El número es negativo". Si numero es igual a 0, se ejecuta la tercera instrucción y se muestra el mensaje "El número es cero".
Alternativa correta

const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo o cero");
}




El console.log es una función muy importante en lenguajes de programación, especialmente cuando se trabaja con JavaScript. Su función principal es imprimir mensajes en la consola del entorno de desarrollo, lo que permite probar información relevante durante la ejecución de un programa.

    Ahora, incluya comandos console.log en diferentes partes del código para verificar el flujo del programa, los valores de las variables y otra información relevante durante la fase de desarrollo.

