En esta clase, se introdujo el segundo curso de lógica de programación, donde se comenzará a interactuar entre HTML y JavaScript para desarrollar un sistema de juego más dinámico. Se recordó la importancia de haber completado el primer curso, ya que se sentaron bases fundamentales.

Se presentó el proyecto inicial, que incluye un archivo HTML, un archivo de estilos CSS y un archivo JavaScript vacío. Se explicó cómo conectar JavaScript con HTML mediante una etiqueta <script> en el archivo HTML, utilizando el atributo src para incluir el archivo JavaScript.

Se introdujo el concepto del Document Object Model (DOM), que permite a JavaScript acceder y manipular los elementos HTML. Se explicó cómo utilizar el método querySelector para seleccionar elementos del DOM, como un encabezado <h1> y un párrafo <p>. Se mostró cómo asignar texto a estos elementos utilizando la propiedad innerHTML.

Finalmente, se destacó la importancia de activar el live server en Visual Studio Code para ver los cambios en tiempo real en el navegador. Se concluyó la clase con la promesa de seguir mejorando el sistema del juego en las próximas lecciones.



En esta clase, se introdujo el concepto de interacción con el HTML a través de JavaScript, enfocándose en los eventos, especialmente el evento de clic. Se explicó que los botones en HTML permiten a los usuarios realizar acciones, y que cada acción se puede capturar como un evento en JavaScript.

Se destacó la importancia de los eventos, como el clic y el mouse over, y cómo estos pueden mejorar la experiencia del usuario (UX). Se mostró cómo se pueden definir eventos en HTML utilizando el prefijo on, específicamente onclick, que permite ejecutar código JavaScript cuando se hace clic en un botón.

Además, se presentó el concepto de funciones en JavaScript, explicando que una función es un bloque de código que realiza una tarea específica. Se discutieron las convenciones para nombrar funciones y se mostró cómo declarar una función utilizando la palabra reservada function. Finalmente, se demostró cómo llamar a una función desde el HTML y se realizó una prueba con una alerta para confirmar que la función se estaba ejecutando correctamente.

La clase concluyó mencionando que se continuará desarrollando la lógica de la función en el próximo video.
Copiar texto de Luri al portapapeles



Aquí tienes un resumen de los temas enseñados en esta aula:

    Cargamos el proyecto con HTML y CSS para crear la estructura y el estilo de la página que usaremos durante el curso.
    Aprendimos a manipular el contenido de los elementos HTML, como H1 y párrafos (p), utilizando JavaScript para cambiar dinámicamente el texto mostrado en la página.
    Comprendimos la importancia de la interacción entre HTML y JavaScript para crear páginas web dinámicas e interactivas.

En la próxima aula:

    Aprenderemos qué son las funciones de manera práctica y cuál es su importancia en la carrera de desarrollo de software.

En esta clase, se abordó la importancia de optimizar el código en JavaScript al trabajar con HTML. Se introdujo el concepto de funciones, específicamente la función asignarTextoElemento, que permite evitar la repetición de código al asignar texto a elementos HTML.

Se explicó cómo declarar una función y cómo utilizar parámetros para hacerla más genérica, permitiendo que reciba diferentes elementos y textos cada vez que se llame. Esto no solo mejora la legibilidad del código, sino que también facilita su mantenimiento y escalabilidad a medida que el proyecto crece.

Además, se mencionó el concepto de hoisting, que permite que las funciones sean llamadas antes de ser declaradas en el código. Al final, se mostró cómo la implementación de esta función reduce significativamente la cantidad de código necesario, haciendo que el desarrollo sea más eficiente y profesional.

En resumen, la clase enfatizó la importancia de crear funciones reutilizables para optimizar el trabajo con JavaScript y HTML.

###  Para saber más: funciones con JavaScript



Las funciones juegan un papel central en la programación y en el desarrollo de software, permitiendo encapsular bloques de código reutilizables y ejecutables. Pueden ser definidas para realizar tareas específicas, desde cálculos simples hasta la manipulación compleja de datos. Las funciones en JavaScript pueden tener o no parámetros, así como devolver o no valores.
Tipo de Función	Ejemplo de Código	Uso
Sin retorno y sin parámetros	function saludo() { ... }	Ejecución de un bloque de código simple.
Sin retorno y con parámetros	function saludar(nombre) { ... }	Ejecución de un bloque de código con argumentos.
Con retorno y sin parámetros	function generarNumeroAleatorio() { ... }	Cálculo y retorno de un valor específico.
Con retorno y con parámetros	function sumar(a, b) { ... }	Cálculo y retorno basado en argumentos.
Función anónima	let saludo = function() { ... };	Definición de una función sin nombre localmente.
Función flecha	let cuadrado = x => x * x;	Definición concisa de funciones cortas.

Su uso es esencial para crear aplicaciones dinámicas, interactivas y eficientes en JavaScript. Sin embargo, no es necesario que crees todos los tipos de funciones en este momento. Sigue las lecciones y ten en cuenta que estas variaciones existen, y a medida que surja la necesidad, profundizaremos cada vez más en la lógica y JavaScript.

### Mensaje, si acerto

En esta clase, se trabajó en la lógica de un juego donde se le indica a la persona usuaria si ha acertado un número secreto. Se revisó cómo utilizar condiciones en JavaScript para verificar si el número ingresado es igual, mayor o menor que el número secreto.

Se explicó el uso de la función asignarTextoElemento para mostrar mensajes a la persona usuaria, indicando si acertó el número o dándole pistas sobre si el número secreto es mayor o menor. Se destacó la importancia de reutilizar funciones para optimizar el código, lo que facilita su mantenimiento y mejora la legibilidad. Al final, se realizó una prueba del juego, donde se ingresaron diferentes números para verificar su funcionamiento. 

### Mensaje de numero de intentos

En esta clase, se continuó el desarrollo de un juego en el que el usuario intenta adivinar un número. Se implementó una funcionalidad para contar cuántas veces el usuario ha intentado adivinar el número. Para ello, se creó una variable llamada numeroIntentos, que se inicializa en uno, ya que el usuario debe intentar al menos una vez.

Cada vez que el usuario no acierta, se incrementa esta variable utilizando la forma abreviada ++. Además, se utilizó console.log para mostrar el número de intentos en la consola.

Cuando el usuario finalmente acierta, se muestra un mensaje que indica cuántas veces intentó adivinar el número. Para esto, se emplearon template strings y el operador ternario para manejar la pluralidad de la palabra "vez". Si el número de intentos es uno, se muestra "vez", y si es más de uno, se muestra "veces".

Finalmente, se probó el sistema, asegurando que funcionara correctamente y que el mensaje final reflejara adecuadamente el número de intentos realizados por el usuario. Se mencionó que aún hay mejoras por hacer, pero que el sistema básico ya está funcional.

### Limpiar campo

En esta clase, se abordó la mejora de un juego de adivinanza de números. Se discutió la necesidad de limpiar el campo de entrada después de cada intento fallido, para facilitar la experiencia del usuario. Para lograr esto, se creó una función llamada limpiarCaja, que utiliza document.querySelector o getElementById para seleccionar el campo de entrada y establecer su valor en una cadena vacía.

Además, se activó un botón de "nuevo juego" que inicialmente está deshabilitado. Este botón se habilita solo cuando el usuario adivina el número correctamente, eliminando el atributo Disable del botón. Esto permite que el usuario inicie un nuevo juego sin problemas.

Se enfatizó la importancia de los comentarios en el código y se mostró cómo simplificar el código eliminando variables innecesarias. La clase concluyó con la preparación para implementar la funcionalidad del botón de reinicio en la próxima sesión.

