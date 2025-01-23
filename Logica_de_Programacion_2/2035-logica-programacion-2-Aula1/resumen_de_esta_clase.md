En esta clase, se introdujo el segundo curso de lógica de programación, donde se comenzará a interactuar entre HTML y JavaScript para hacer un sistema de juego más dinámico. Se recordó la importancia de haber completado el primer curso, ya que se basará en el juego de número secreto desarrollado anteriormente.

Se presentó la estructura del proyecto inicial, que incluye un archivo HTML, un archivo de estilos CSS y un archivo JavaScript vacío. Se explicó cómo conectar JavaScript con HTML mediante una etiqueta <script> y el atributo src, permitiendo que el código JavaScript interactúe con los elementos HTML.

Se introdujo el concepto del Document Object Model (DOM), que permite a JavaScript acceder y manipular los elementos de la página web. Se explicó cómo utilizar el método querySelector para seleccionar elementos HTML, como un encabezado <h1> y un párrafo <p>, y cómo asignarles texto utilizando la propiedad innerHTML.

Finalmente, se mostró cómo activar el servidor en vivo en Visual Studio Code para ver los cambios en tiempo real en el navegador, y se dejó claro que se continuará mejorando el sistema del juego en las próximas clases.

### Para saber más: ¿Vamos a leer más sobre listas?

Un array, arreglo o lista en JavaScript es una estructura de datos que permite almacenar y organizar múltiples valores en una sola variable. Los valores en un array pueden ser de cualquier tipo de dato, como números, strings, objetos, otros arrays, y así sucesivamente. Los arrays en JavaScript son indexados, lo que significa que cada valor dentro de ellos está asociado con un índice numérico, generalmente comenzando desde el índice 0.
Creando un array

Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes [].

let frutas = ["Manzana", "Uva", "Naranja"];

Accediendo a los valores Los elementos de un array se acceden mediante índices numéricos, que comienzan en 0.
Índice	Elemento
0	"Manzana"
1	"Uva"
2	"Naranja"

console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"

Añadiendo nuevos elementos

Para agregar un elemento al final del array, puedes usar el método push.

frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]

Eliminando el último elemento

Para eliminar el último elemento, puedes usar el método pop.

frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]

¿Qué lenguajes de programación utilizan arrays?

Aquí tienes una lista de algunos lenguajes de programación que utilizan arrays:

    JavaScript
    Python
    Java
    C++
    C#
    Ruby
    PHP
    Swift
    Kotlin
    Go

Otros lenguajes también admiten el uso de arrays o estructuras de datos similares para almacenar colecciones de valores. Aprender sobre arrays es importante porque desempeñan un papel fundamental en el desarrollo de aplicaciones de software.

Las listas o arrays proporcionan una manera eficiente de almacenar y acceder a conjuntos de datos, lo que permite a los programadores organizar la información de manera lógica y manipular estos datos de manera efectiva.

Con el conocimiento de cómo trabajar con arrays, es posible crear algoritmos más poderosos, resolver problemas de programación de manera más eficiente y crear aplicaciones más dinámicas e interactivas.