### Los selectores de clase

Los selectores definen qué elementos aplica un conjunto de reglas CSS. Imagina que necesitas editar el color de un título <h1>, de negro a rojo, que tiene la propiedad class="titulo". En este caso, ¿cuál sería la sintaxis correcta en CSS para estilizar solo el elemento que tiene esa clase específica?

Analiza las opciones a continuación y marca la alternativa correcta:

    Alternativa correta

    h1 {
        color: red;
    }

Alternativa correta

  .titulo {
    color: red;
}

Para estilizar una clase en CSS, es necesario utilizar el punto antes de llamar al nombre asignado a la clase. Además, es la propiedad color de CSS la que define el valor del color de un elemento, y en este caso, el valor red corresponde al color rojo.
Alternativa correta

titulo {
    color: red;
}

### Reset CSS
Has aprendido sobre la importancia de resetear el CSS antes de estilizar cualquier elemento de una página, ya que esta parte del código elimina todos los estilos por defecto de los navegadores. Teniendo esto en cuenta, analiza el error del código a continuación y marca la alternativa que indique la sintaxis correcta del reset.

* {
margin: 100;
border: 100;
}

    Alternativa correta

    * {
    padding: 100;
    border: 100;
    }

Alternativa correta

* {
margin: 0;
border: 0;
}

Alternativa correta

* {
margin: 0;
padding: 0;
}

Para resetear los estilos por defecto de los navegadores de forma efectiva, utilizamos las propiedades margin, que define el margen en los cuatro lados del elemento (arriba, derecha, abajo, izquierda), y padding, que define el relleno interno en los mismos cuatro lados del elemento, ambas con un valor de 0.

### Posicionando una imagen con box-sizing
Aprendiste en el vídeo anterior que la propiedad box-sizing es responsable de cómo se calculan el ancho y el alto totales de un elemento. Ante esto, imagina que estás creando un proyecto y te encuentras con un error: la imagen utilizada está superando el límite del elemento padre. En otras palabras, deseas que la imagen, como elemento hijo, "se encoja" y se ajuste al contenido, como elemento padre. Marca la alternativa que resuelva correctamente el problema:

    Alternativa correta

    box-sizing: content-box;
    width: 100%;

Alternativa correta

box-sizing: content-box;
width: 100%;
padding: 5px;

Alternativa correta

box-sizing: border-box;
width: 100%;
padding: 5px;

En este caso, la imagen (elemento hijo) "se encojería" y se ajustaría al tamaño del contenido (elemento padre). Esto ocurre porque el border-box le indica al navegador que tenga en cuenta cualquier borde y relleno en los valores especificados para el ancho y el alto de un elemento.

### Utiliza Flexbox
Ahora que has aprendido que Flexbox es una herramienta de CSS que tiene como objetivo organizar los elementos de una página HTML de forma dinámica y mantener un diseño flexible, analiza el fragmento de código HTML a continuación y marca la alternativa que utiliza correctamente el Flexbox CSS:

    Alternativa correta

     .sobre-mim {
    position: flex;
    }

Alternativa correta

.sobre-mim {
display: flexbox;
}

Alternativa correta

.sobre-mim {
display: flex;
}

¡Correcto! El selector de clase se utilizó correctamente mediante el punto (.) antes del nombre y la propiedad display con el valor flex es la estructura estándar de Flexbox.
Alternativa correta

sobre-mim {
display: flex;
}

### Justificacion de elementos
En el video anterior aprendiste cómo alinear elementos a través de justify-content, un comando responsable de justificar, formateando la posición según el requisito del desarrollador. Ahora imagina que recibiste un código listo, el cual, al presentar errores, no está funcionando. Además, también te enviaron imágenes de cómo está y cómo debería ser el proyecto.

Analiza el código y las imágenes a continuación y marca la alternativa que resuelva correctamente el problema.

main { display: flexbox; justify-content: center; }

Como está:

![alt text](aula3-img1.webp)

Como debería ser:

![alt text](aula3-img2.webp)

    Alternativa correta

    main {
            display: flex;
            justify-content: space-between;
    }

¡Correcto! Con este código, el proyecto pasa a ser como debería ser, es decir, con los cuadrados en línea, dentro del límite de main y separados por un espacio en el medio. Ambas propiedades se utilizaron dentro del estándar de Flexbox y en el contexto adecuado.
Alternativa correta

main {
        display: flex;
        justify-content: center;
}

Alternativa correta

main {
        display: flexbox;
        justify-content: space-between;
}

### Personaliza el titulo proyecto
La personalización de textos, especialmente títulos, mediante estilos y fuentes, es una etapa importante en el desarrollo de una página web, ya que la experiencia del usuario depende en gran medida de la parte visual. Sabiendo esto, imagina que te han asignado la tarea de estilizar el título <h1> de una página, cambiando la fuente predeterminada a la importada Roboto, aumentando su tamaño de 16 píxeles a 20 píxeles y cambiando su color de negro a azul.

Analizando el código base que has recibido a continuación, marca la alternativa que indique correctamente lo que debe ser cambiado:

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

h1 {
    font-size: 16px;
}

    Alternativa correta

    h1 {
        font-size: 20vh;
        font-family: 'Roboto', sans-serif;
        font-color: blue;
    }

Alternativa correta

h1 {
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: blue; 
}

¡Correcto! La sintaxis tanto de las propiedades como de los valores correspondientes se escribió correctamente. La unidad de medida del tamaño de la fuente fue el píxel, como se pidió en el enunciado, se utilizó la fuente Roboto importada y se cambió el color a azul.
Alternativa correta

h1 {
    font-size: 20%;
    font-family: 'Roboto', sans-serif;
    font-color: blue;
}

Alternativa correta

h1 {
    font-sizing: 20px;
    font-family: Roboto, sans-serif;
    color: blue;
}

### Editando las tags a
El elemento de anclaje <a> con el atributo href crea un hipervínculo en las páginas web, a través de una URL que indica el destino del enlace. A partir de esto, imagina que has creado una lista de enlaces en tu página web y necesitas personalizarlos en CSS en dos aspectos: eliminar el subrayado y crear un fondo gris con bordes redondeados.

Marca la alternativa correcta que indique el código CSS responsable de esta personalización:

    Alternativa correta

    a {
        text-decoration: none;
        background-color: grey;
        border: 10px;
    }

Alternativa correta

a {
    text-decoration: none;
    background-color: grey;
    border-radius: 10px;
}

¡Correcto! Todas las propiedades y valores utilizados están correctos en contexto y sintaxis. Mientras que el valor none es responsable de eliminar las decoraciones del elemento de anclaje, la propiedad border-radius hace que los bordes de los enlaces sean redondeados.
Alternativa correta

a {
    text-decoration: underline;
    background-color: grey;
    border-radius: 10px;
}

### Espaciando elementos hijos
Al definir el valor de la propiedad display de un elemento como flex, creamos un contenedor flex, es decir, comenzamos a utilizar Flexbox. A partir de este punto, todos los elementos dentro del contenedor se llaman elementos hijos y mostrarán comportamientos estandarizados.

Sabiendo esto, marca la alternativa que presente correctamente dos propiedades de Flexbox que, cuando se utilizan en el elemento padre, son responsables del espaciado de los elementos hijos:

    Alternativa correta

    Propiedades align-items y justify-content.

¡Correcto! Ambas propiedades forman parte de la estructura de Flexbox y actúan en el elemento padre con la responsabilidad de espaciar los elementos hijos.
Alternativa correta

Propiedades justify-content y column.
Alternativa correta

Propiedades align-items y display.
Alternativa correta

Propiedades space-between y flex-direction.