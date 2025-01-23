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

### Funcion reiniciar juego

En esta clase, se abordó la implementación de un botón de "Nuevo Juego" en un juego, utilizando la función reiniciarJuego. Se explicó que al presionar el botón, se debe llamar a esta función, que aún no estaba definida, pero se comenzó a construir.

La función reiniciarJuego tiene como objetivo reiniciar el juego desde cero, lo que implica varias acciones:

    Limpiar la caja de texto utilizando la función limpiarCaja.
    Mostrar mensajes iniciales, como el título y el rango de números, a través de una nueva función llamada condicionesIniciales.
    Generar un nuevo número aleatorio.
    Reiniciar el número de intentos a 1.
    Deshabilitar el botón de "Nuevo Juego" para evitar que se pueda reiniciar el juego en medio de una partida.

Se enfatizó la importancia de organizar el código y utilizar comentarios para clarificar las acciones de la función. Además, se discutió sobre la mejora continua del código, como renombrar funciones para reflejar mejor su propósito.

Finalmente, se probó la funcionalidad del nuevo botón, asegurándose de que todas las condiciones iniciales se restablecieran correctamente al iniciar un nuevo juego. La clase concluyó con la idea de que se pueden seguir haciendo mejoras en el juego en futuras lecciones.



En esta aula:

    Aprendimos cómo crear un programa para verificar si el 'intento' ingresado es igual al número secreto definido.Utilizamos estructuras condicionales para tomar decisiones basadas en el resultado de esta comparación;
    Creamos una variable para almacenar la cantidad de intentos realizados por el usuario;
    Hemos visto la importancia de consultar la documentación del lenguaje y las bibliotecas utilizadas en el desarrollo del programa. La documentación es una fuente valiosa de información que nos ayuda a comprender conceptos y a utilizar correctamente las funcionalidades disponibles.

En la próxima aula:

    Vamos a aprender cómo funcionan las listas (o arrays, en inglés) y cuán fundamentales son en la carrera de desarrollo de software.

### Arreglos



En esta clase, se abordó el tema de las listas en JavaScript, específicamente los arreglos. Se destacó que JavaScript permite la creación de listas combinadas, aunque se recomienda mantener la homogeneidad en las listas, es decir, que todos los elementos sean del mismo tipo (cadenas, números, objetos, etc.).

Se explicaron varias operaciones comunes con arreglos, como agregar elementos utilizando el método push, que permite añadir elementos al final de la lista. También se mencionó cómo obtener el tamaño de un arreglo con la propiedad length, enfatizando la importancia de escribirlo correctamente.

Se discutió cómo acceder a los elementos de un arreglo mediante su índice, recordando que la numeración comienza en 0. Se mostró cómo obtener el primer y el último elemento de la lista, así como la importancia de conocer la última posición para evitar errores al acceder a índices no válidos.

Finalmente, se mencionó que en la próxima clase se implementará una lógica para evitar que los números sorteados se repitan. Se alentó a los estudiantes a profundizar en la documentación de JavaScript para entender mejor el manejo de listas.
Copiar texto de Luri al portapapeles

### Arreglo recursividad

En esta clase, se abordó el concepto de listas (arreglos) y su uso en la programación, específicamente en el contexto de un juego donde se generan números aleatorios. Se explicó cómo crear una lista para almacenar los números que ya han sido sorteados, utilizando el método push para agregar nuevos números a la lista.

Se introdujo la condición if para verificar si un número generado ya está en la lista, utilizando el método includes, que devuelve un valor booleano. Si el número ya existe, se debe generar otro número, lo que se logra a través de la recursividad, permitiendo que la función se llame a sí misma hasta encontrar un número que no haya sido sorteado.

Se destacó la importancia de la recursividad para evitar la creación de múltiples funciones y se advirtió sobre la necesidad de tener una condición de salida para evitar bucles infinitos. Finalmente, se realizaron pruebas en el código para verificar que el algoritmo funcionaba correctamente al generar números únicos hasta que se agotaron las opciones disponibles.
Copiar texto de Luri al portapapeles

### Resolviendo la Recursividad

En esta clase, se abordó el tema de la recursividad y cómo manejar un problema común relacionado con ella: la falta de una condición de salida. Los instructores, Cristian y Leo, discutieron la importancia de establecer un límite para evitar que el programa se quede en un bucle infinito.

Se introdujo la idea de utilizar una variable llamada "número máximo" para definir el rango de números que se pueden sortear en el juego. Se explicó cómo verificar si todos los números posibles ya han sido sorteados utilizando la función len() para comparar la longitud de la lista de números sorteados con el número máximo.

Además, se implementó un mensaje que se muestra cuando todos los números han sido sorteados, y se desactiva el botón de "nuevo juego" para indicar que el juego ha terminado. Se sugirió como tarea adicional que los estudiantes implementen una variable que limite el número de intentos antes de reiniciar el juego, lo que también ayudaría a manejar la recursividad de manera más eficiente.

### lo que aprendimos



En esta aula:

    Aprendimos a trabajar con listas en JavaScript, incluyendo cómo agregar elementos, obtener el tamaño de la lista, acceder a elementos específicos y la importancia de conocer la posición del último elemento. También destacamos la importancia de leer la documentación y comprender los conceptos relacionados con el manejo de listas en JavaScript.

    La importancia de trabajar con funciones en la programación.

    Cómo generar un número secreto a través de una función.

    El uso del método push para almacenar el número generado al final de la lista.

    Cómo verificar si un número ya existe en la lista utilizando el método includes de JavaScript.

    La aplicación de la recursividad para generar un nuevo número válido.

    Como implementar un límite en el juego para evitar el bucle infinito.

    Como implementar una variable adicional para limitar la cantidad de veces que se puede jugar antes de reiniciar el juego.

En la próxima aula:

    Tendrás la oportunidad de poner en práctica todo el conocimiento que has adquirido resolviendo un desafío. ¡Hasta entonces, buena suerte!


### Para saber más: creando una cuenta en GitHub y Vercel (paso a paso)


GitHub es una plataforma ampliamente utilizada para alojar y colaborar en proyectos de código fuente por personas desarrolladoras de software. Ofrece funciones de control de versiones que permiten a equipos de programadores trabajar de manera eficiente, realizando cambios, revisiones y resolviendo conflictos de código de forma colaborativa. ¡Es como la 'red social' de los desarrolladores!

Además, GitHub facilita el seguimiento de problemas y solicitudes de extracción, lo que hace que el proceso de desarrollo sea más transparente y organizado.

El primer paso para crear una cuenta en GitHub es acceder al sitio web de GitHub a través de este enlace y hacer clic en 'Sign up'.

A continuación, verás una página como esta:

Haz lo siguiente:

    Ingresa tu correo electrónico.
    Crea una contraseña.
    Ingresa un nombre de usuario.
    Si deseas recibir actualizaciones y anuncios de productos por correo electrónico, escribe 's' para sí o 'n' para no.
    Haz clic en el botón Continuar.

Después de completar tu información personal y hacer clic en Continuar, haz clic en Create Account y recibirás una confirmación de registro por correo electrónico. Después de validar tu cuenta, podrás utilizar los servicios de GitHub :)

Creando una cuenta en Vercel

Por su parte, Vercel es una plataforma de alojamiento e implementación de aplicaciones web modernas, especializada en ofrecer experiencias de carga rápida y rendimiento optimizado. A menudo se utiliza para alojar sitios web estáticos y aplicaciones de una sola página (SPA), aprovechando técnicas avanzadas y eficientes para los usuarios finales.

Vercel simplifica la implementación continua y la escalabilidad automática, permitiendo que los desarrolladores se centren en la creación de excelentes experiencias digitales sin preocuparse por la complejidad subyacente de la infraestructura.

El primer paso para crear una cuenta en Vercel es acceder al sitio web de Vercel a través de este enlace y hacer clic en 'Sign up'.

Después de hacer clic en 'Sing up', verás una página como esta:

Luego, haz clic en 'Continue with GitHub' y listo, ¡tu cuenta ha sido creada! Ahora solo tienes que utilizar los servicios de Vercel 

