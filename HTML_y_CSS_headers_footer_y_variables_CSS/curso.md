### Alineamiento con display flex
Siguiente pregunta

Aprendemos que podemos utilizar el display: flex para posicionar elementos en la pantalla, observando su comportamiento predeterminado. Dicho esto, observa el siguiente código HTML, en el cual el elemento padre container contiene cuatro divs y cada uno será un cuadrado en la pantalla:

<body>
    <div class="container">
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
    </div>
</body>

Ya en CSS, el elemento padre fue estilizado de la siguiente manera:

.container {
    margin: 20%;    /* agrega un margen para centrar los cuadrados en la pantalla */
    display: flex;    /* coloca los cuadrados uno al lado del otro */
    gap: 10px;    /* agrega espacios iguales entre cada cuadrado */
}

Estos códigos muestran el siguiente resultado en la pantalla:

Imagina que deseas alinear estos cuadrados verticalmente, uno debajo del otro, sin embargo, incluso al agregar el display: flex aún no has obtenido ese resultado.

¿Cuál de las siguientes alternativas representa la solución para organizar estos elementos como deseas?
Seleccione una alternativa

    Podemos agregar la propiedad flex-direction: column al CSS de la clase .container.

    Podemos agregar la propiedad justify-content: center al CSS de la clase .container.

    Podemos agregar la propiedad align-items: flex-start al CSS de la clase .container.

    Podemos agregar la propiedad flex-direction: row al CSS de la clase .container.

Discutir en el Foro
Siguiente pregunta
Luri

Ayuda 

Aprendemos que podemos utilizar el display: flex para posicionar elementos en la pantalla, observando su comportamiento predeterminado. Dicho esto, observa el siguiente código HTML, en el cual el elemento padre container contiene cuatro divs y cada uno será un cuadrado en la pantalla:

<body>
    <div class="container">
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
    </div>
</body>

Ya en CSS, el elemento padre fue estilizado de la siguiente manera:

.container {
    margin: 20%;    /* agrega un margen para centrar los cuadrados en la pantalla */
    display: flex;    /* coloca los cuadrados uno al lado del otro */
    gap: 10px;    /* agrega espacios iguales entre cada cuadrado */
}

Estos códigos muestran el siguiente resultado en la pantalla:

Imagina que deseas alinear estos cuadrados verticalmente, uno debajo del otro, sin embargo, incluso al agregar el display: flex aún no has obtenido ese resultado.

Aquí tienes un resumen de la clase:

En esta clase, estamos aprendiendo a estilizar los enlaces (botones) en nuestro proyecto. Comenzamos ajustando la fuente del subtítulo, estableciendo la familia de fuentes, el tamaño y el peso.

Luego, eliminamos el color de fondo de los enlaces y ajustamos el color del texto a un gris claro (f6f6f6).

Después, agregamos un borde a los enlaces, estableciendo el ancho, el estilo (sólido) y el color (22d4fd).

Por último, ajustamos el ancho de los enlaces para que coincidan con el diseño de Figma y redujimos el radio de borde de 16px a 8px para darles una apariencia más cuadrada.

Aunque los enlaces se ven mejor ahora, aún tenemos que agregar los iconos, lo cual veremos en los próximos videos.

Border

Durante la clase, personalizamos la propiedad CSS llamada border para añadir el borde alrededor de los botones. Esta propiedad se puede utilizar para definir los valores de ancho del borde, estilo del borde y color del borde, y tiene algunos estilos diferentes, como "dotted", que conocimos en la clase a través de la documentación.
¿Qué son los comentarios?

Los comentarios son notas de texto que se pueden insertar a lo largo del desarrollo y que serán ignoradas por el código, por lo tanto, no interfieren en su funcionamiento.

¿Para qué sirven los comentarios?

Los comentarios pueden ser utilizados para anotar información importante sobre el código, para guardar códigos que estemos probando sin necesidad de borrar y reescribir, para describir alguna función específica y facilitar mantenimientos futuros o incluso para ayudar en la organización de las ideas de construcción del código.

Cómo comentar en HTML y CSS

El uso de comentarios es común en diversos lenguajes y cada uno tendrá su sintaxis particular. Esto también ocurre en HTML y CSS, ya que en cada uno tenemos una manera de agregar comentarios, que vamos a conocer a continuación:

HTML

Los comentarios en HTML se asemejan a una apertura de etiqueta. Abrimos un comentario con . Todo lo que esté entre estos dos marcadores será considerado como comentario, incluyendo saltos de línea:

<p> Esto es un párrafo de texto y será mostrado por el navegador </p>

<!-- Esto es un comentario y será ignorado  -->

<!-- Esto es un comentario con salto de línea

y también será ignorado  -->

<p> Esto es un párrafo de texto y será mostrado por el navegador </p>

CSS

Los comentarios en CSS también tienen apertura y cierre. Abrimos este tipo de comentario con /* y cerramos con */ y al igual que en HTML, todo lo que esté entre estas marcas será considerado comentario, aunque esté entre más de una línea:

body{
    background-color: white; 
    /* Esto es un comentario en CSS */
    /* 
        Esto es un comentario en CSS con
        salto de línea
    */
}

Buenas prácticas al comentar

Los comentarios pueden ser muy útiles para facilitar el desarrollo, sin embargo, debemos prestar atención a algunas buenas prácticas para hacer un uso adecuado de ellos:

    Evita agregar muchos comentarios para no generar "desorden" en tu código;
    Evita crear comentarios muy largos. Ten en cuenta que aunque no se ejecuten, estos comentarios ocupan espacio y pueden hacer que tu archivo sea más pesado;
    Utiliza los comentarios a tu favor, es decir, anota información esencial en ellos, ya que esto facilitará que encuentres lo que realmente necesitas recordar al realizar mantenimientos en tu código;
    Al usar comentarios para probar tu aplicación, recuerda eliminar esas notas cuando termines, para que tu código no quede desorganizado y con partes innecesarias;
    Por último, recuerda siempre que un código descriptivo es más duradero que muchos comentarios. Cuando estés trabajando con HTML, recuerda usar las etiquetas semánticas y al crear tus clases CSS, añade nombres significativos. Así, tu código será naturalmente descriptivo y no dependerá tanto de los comentarios, que pueden ser eliminados o perderse durante los mantenimientos =) .



1 - Agregando un subtítulo a la página

Imagina que estás desarrollando una página web para compartir tus redes sociales. Necesitas agregar un subtítulo "Accede a mis redes:" encima de los enlaces para Instagram y Github. Tu tarea es editar el archivo index.html para incluir este subtítulo. Recuerda usar la etiqueta <h2> para el subtítulo y colocarlo dentro de la <div> que ya contiene los enlaces.

2 - Cambiando la disposición de los elementos con Flexbox

Ahora que se ha añadido el subtítulo, te das cuenta de que está alineado a la izquierda de los botones en lugar de encima de ellos. Esto sucedió porque los elementos están dispuestos horizontalmente. Tu misión es cambiar la disposición de los elementos (subtítulo y botones) a una disposición vertical. Edita el archivo style.css, modificando la propiedad flex-direction a column dentro de la clase .presentacion__enlaces. Esto cambiará la dirección del Flexbox, alineando los elementos verticalmente.

3 - Ajustando la alineación y el espaciado de los elementos

Después de modificar la dirección del Flexbox, observas que los elementos (texto y botones) están muy cerca unos de otros y alineados a la izquierda. Para mejorar la estética de la página, necesitas centrar verticalmente estos elementos y agregar un espacio entre ellos. En el archivo style.css, dentro de la clase .presentacion__enlaces, añade la propiedad align-items: center para centrar los elementos. Luego, agrega la propiedad gap con un valor de 32px para añadir el espaciado entre cada elemento.

4 - Creando una clase para el subtítulo

Estás desarrollando una página web y has decidido que el subtítulo "Accede a mis redes:" necesita una estilización específica. Para eso, vas a crear una clase CSS para este subtítulo. En el archivo index.html, encuentra la etiqueta <h2> que contiene el subtítulo y añade una clase llamada presentacion__enlaces__subtitulo. Tu tarea es insertar esta clase en la etiqueta <h2> de forma correcta.

5 - Estilizando el subtítulo

Ahora que has creado una clase para el subtítulo, es hora de estilizarlo. En el archivo style.css, añade la clase .presentacion__enlaces__subtitulo y configura las propiedades de estilo. Utiliza la fuente 'Krona One', con un peso de fuente (font-weight) de 400 y un tamaño de fuente (font-size) de 24px. Ajusta la fuente para que sea 'sans-serif' sin comillas. Tu tarea es escribir el código CSS para aplicar estas configuraciones al subtítulo.

6 - Modificando el estilo de los botones

Los botones de tu página necesitan un nuevo aspecto. En el archivo style.css, encuentra la clase .presentacion__enlaces__link y realiza los siguientes cambios: elimina el fondo cian, cambia el color del texto a blanco (#F6F6F6), añade un borde sólido de 2px en color cian (#22D4FD), cambia el ancho a 378px y ajusta el border-radius a 8px. Tu tarea es cambiar el código CSS para reflejar estos cambios, creando botones con bordes cian, texto blanco y esquinas menos redondeadas.




Lo que aprendimos en esta aula:

    Funciona la actualización del diseño de un proyecto en Figma;
    Posicionar los botones según el nuevo diseño mediante display: flex;
    Realiza la estilización de los botones según el nuevo diseño.

Aquí tienes un resumen de la clase:

    En esta clase, el instructor está enseñando cómo agregar iconos a los botones de redes sociales en una página web.
    Primero, el instructor crea una carpeta llamada "Assets" para almacenar todas las imágenes que se utilizarán como iconos.
    Luego, agrega las etiquetas <img> a los enlaces de Instagram y GitHub, y establece la propiedad src para apuntar a la ruta de los archivos de imagen en la carpeta "Assets".
    Sin embargo, nota que los iconos y el texto de los botones no están alineados correctamente, por lo que el próximo paso será posicionar los elementos adecuadamente.
    El objetivo de esta clase es mostrar cómo incorporar iconos a los botones de redes sociales en una página web.

Aquí tienes un resumen de la clase:

En esta clase, estamos aprendiendo a posicionar los iconos dentro de los enlaces HTML. Primero, establecemos la propiedad display: flex en los enlaces para alinearlos horizontalmente. Luego, usamos justify-content: center para centrar los iconos y los textos dentro de los enlaces.

Para agregar un espacio entre los iconos y los textos, aplicamos un margen de 10px a los enlaces. Esto da como resultado unos botones bien estilizados y espaciados.

El próximo paso será hacer un pequeño ajuste final a los botones, como veremos en el siguiente video.

### Hover

Aquí está un resumen de la clase:

En esta clase, aprendimos sobre la propiedad CSS "hover" que nos permite cambiar el estilo de un elemento cuando el usuario pasa el cursor sobre él.

El instructor nos mostró un ejemplo de cómo usar "hover" para cambiar el color de fondo de un enlace cuando el usuario pasa el cursor sobre él. Luego, aplicamos este mismo concepto a un botón en nuestro proyecto, haciendo que el color de fondo cambie cuando pasamos el cursor sobre él.

Finalmente, el instructor mencionó que en la próxima clase veremos cómo crear el encabezado y el pie de página de nuestro proyecto.

En resumen, aprendimos a usar la propiedad "hover" de CSS para agregar interactividad a nuestros elementos, como botones y enlaces, cuando el usuario interactúa con ellos.

### Para saber mas: Hover

El hover se utiliza para seleccionar elementos cuando pasas el ratón sobre ellos. Esta y otras informaciones útiles sobre el hover las puedes encontrar en la documentación =)
https://www.w3schools.com/CSSref/sel_hover.php

### Desarrollando el footer

Aquí tienes un resumen de la clase:

En esta clase, el objetivo es crear el footer y el header de la página web.

Para el footer:

    Se agrega una etiqueta <footer> con la frase "Desarrollo por Alura Latente" (o el nombre del estudiante).
    Se crea una clase "footer" para poder estilizar el footer.
    Se establece un color de fondo (#024FD) y un padding de 24px.
    Se centra el texto y se cambia la fuente a Montserrat de 24px y peso regular.
    Se quita la propiedad "height: 100vh" del body para que el footer ocupe todo el espacio.

Ahora que el footer está listo, en el próximo video se procederá a crear el header.

###  Desarrollando el header

Aquí tienes un resumen de la clase:

En esta clase, estamos aprendiendo a crear el header (encabezado) de nuestra página web. Para ello, vamos a utilizar las siguientes etiquetas HTML:

    <header>: Esta etiqueta contiene todo el contenido del encabezado.
    <nav>: Esta etiqueta se utiliza para crear un menú de navegación dentro del header.
    <a>: Esta etiqueta se usa para crear los enlaces del menú de navegación, en este caso "Home" y "Sobre mí".

También hemos creado algunas clases CSS para poder estilizar el header:

    .header: Esta clase se aplica al elemento <header>.
    .header_menu: Esta clase se aplica al elemento <nav>.
    .header__menu__link: Esta clase se aplica a los enlaces <a> dentro del menú de navegación.

En el próximo video, vamos a aprender a estilizar este header utilizando CSS.

### Para saber mas: Padding



Observe la siguiente imagen:

La pantalla de arriba muestra los botones que creamos en nuestro proyecto para acceder a las redes sociales. Sin embargo, podemos notar que el ícono y el texto dentro de cada botón están "apretados" por los bordes, lo que desfavorece la apariencia del proyecto.

Todos los botones tienen contenido: un ícono y el texto con el nombre de la red social. Además, todos los botones tienen un borde delgado en azul. Por lo tanto, necesitamos agregar alguna propiedad que cree un espacio entre el contenido y los bordes del botón, para obtener el siguiente resultado:

¡Mucho mejor, ¿verdad? Pero ¿sabes qué propiedad nos ayudó a definir la distancia entre el contenido y el borde?

Si pensaste en padding, ¡acertaste!

El padding es responsable de definir la distancia entre un contenido y sus bordes. En el caso de nuestro proyecto, añadimos un padding: 21.5px 0, que fue suficiente para crear un espacio interno más amplio en los botones. Esta propiedad es extremadamente útil porque garantiza que exista este espacio de "respiración" entre los bordes y el contenido, lo que hace que la apariencia sea más limpia y armoniosa.

Para comprender mejor cómo funciona el padding, puedes consultar la documentación.
https://www.w3schools.com/csS/css_padding.asp


### Hagamos lo que hicimos en aula



1 - Personalizando el pie de página de tu sitio web

Imagina que estás desarrollando un sitio web y ha llegado el momento de personalizar el pie de página. El desafío es crear un pie de página estilizado con las siguientes características: debe tener un fondo azul claro (#22D4FD), texto en negro (#000000), y el texto debe estar centrado y utilizar la fuente 'Montserrat', tamaño 24px y peso 400. Además, el pie de página debe tener un padding de 24px. Utiliza el HTML y CSS proporcionados como base y aplica las modificaciones necesarias.

2 - Ajustando el espaciado interno de la presentación

Te han encargado ajustar el diseño de una sección de presentación en un sitio web. Actualmente, los elementos están demasiado cerca de los bordes, lo que afecta la estética del sitio. Tu tarea es reemplazar la propiedad margin por padding en la clase .presentación del CSS, probando valores de porcentaje para encontrar el espaciado ideal. Comienza con un 5% y ajusta según sea necesario para obtener un aspecto equilibrado.

3 - Eliminando el height para adaptar el diseño

Tu sitio web está experimentando un problema de diseño: la propiedad height: 100vh en el body está impidiendo que el contenido se ajuste correctamente en la pantalla, especialmente con la adición de nuevos elementos como un pie de página. Tu misión es comentar la línea que define height: 100vh en el CSS y verificar el impacto de este cambio en el diseño del sitio. Observa cómo el contenido y el pie de página se adaptan a la nueva configuración.

4 - Estilizando el encabezado con CSS

Estás creando un sitio web y ha llegado el momento de estilizar el encabezado para que sea visible y atractivo, similar al proyecto en Figma. Necesitas agregar estilo al encabezado en el archivo style.css, de modo que los enlaces "Home" y "Sobre mí" estén alineados horizontalmente y tengan un aspecto moderno. Considera usar propiedades como font-size, color, margin, padding y display. Intenta también agregar un hover para cambiar el color de los enlaces cuando el ratón pase sobre ellos.

5 - Ajustando el espaciado interno de los enlaces

Basándonos en el estilo actual del encabezado, parece que los enlaces pueden estar muy cerca uno del otro o del borde del encabezado, lo que puede afectar la legibilidad y la estética del sitio. Tu tarea es ajustar el espaciado interno (padding) de los enlaces "Home" y "Sobre mí" para asegurarte de que tengan un espaciado adecuado alrededor del texto. Esto hará que el encabezado sea más atractivo y fácil de usar.




Lo que aprendimos en esta aula:

    Crear y estilizar el pie de página de la página;
    Crear el encabezado de la página;
    Aplicar los enlaces de navegación a través de la etiqueta <nav>.

### Estilizando encabezados

Aquí está un resumen de la clase:

    La instructora está organizando el orden de los elementos en la hoja de estilos CSS para que coincida con el orden del HTML.
    Ella está estilizando el encabezado (header) de la página:
        Cambia la fuente a Montserrat Semi Bold de 24px y color azul.
        Agrega un padding de 2% en la parte superior y 15% a la izquierda para alinear el texto.
        Usa flexbox para crear un espacio de 80px entre los enlaces del menú.
        Reduce el margen entre el encabezado y el contenido principal a 7%.
    La próxima tarea es hacer que los enlaces del menú (sobre mí, hobby) sean funcionales, lo cual se abordará en el próximo video.

En resumen, la clase se enfoca en estilizar el encabezado de la página para que tenga una apariencia más organizada y atractiva.

### Desarrollando la nueva pagina

Aquí está un resumen de la clase:

    En esta clase, el objetivo es desarrollar una nueva página "Sobre mí" a partir de la página inicial.
    Para eso, se copia el encabezado y el pie de página de la página inicial y se los agrega a la nueva página.
    También se agrega un elemento main con un título "Sobre mí" y dos párrafos de texto.
    Se incluye una imagen en la nueva página.
    Para mantener el mismo estilo de la página inicial, se utiliza la misma hoja de estilos CSS, enlazándola en la nueva página.
    Se aplican las mismas clases CSS de la página inicial al contenido de la nueva página.
    Finalmente, se verifica que la nueva página se vea correctamente estilizada.
    Al final de la clase, se menciona que aún hay algunos ajustes que hacer, que serán vistos en la próxima clase.

### Desafio: crear una pagina curriculum



Ahora que has aprendido a crear otras páginas con HTML, ¡queremos desafiarte!

Crea otra página en tu proyecto y construye en ella tu currículum.

Puedes seguir la estructura de los currículums tradicionales, con tus datos en la parte superior y tu información dividida en secciones, o puedes dejar volar tu creatividad y hacer algo completamente diferente, según tu criterio.

Es importante que en esta página de currículum añadas una imagen tuya y crees al menos una lista HTML que contenga tus experiencias laborales o educativas.

Además, podría ser interesante añadir otros proyectos en caso de que los tengas.

Recuerda: no tengas miedo de personalizar esta página, después de todo, es tu currículum y cuanto más refleje "tu esencia", mejor.

¡Ahora es tu turno de crear, ¿te animas al desafío?

### haga lo que hicmos en clase



1 - Estilizando el encabezado con CSS

Imagina que trabajas en el desarrollo front-end en un proyecto de sitio web. Tu desafío es estilizar el encabezado de la página de acuerdo con las especificaciones proporcionadas. Utiliza el archivo style.css para aplicar las propiedades CSS en el encabezado.

2 - Ajustando el espaciado del contenido

Ahora, como desarrollador, tu próximo desafío es ajustar el espaciado del contenido de la página para que se alinee correctamente con el encabezado.

3 - Creando y navegando a la página "Sobre mí"

Estás trabajando en un proyecto de sitio web personal y necesitas agregar una página "Sobre mí". Para ello, debes crear un nuevo archivo HTML llamado about.html y configurar un enlace en el menú de navegación de tu sitio principal (index.html) para redirigir a esta nueva página. Además, ajusta el encabezado de la página about.html para que el título de la pestaña sea "Sobre mí" y agrega un <h1> con el texto "Sobre mí" en el cuerpo de la nueva página. Asegúrate de que la navegación entre la página principal y la página "Sobre mí" funcione correctamente.

4 - Ajustando el estilo después de reorganizar archivos

Has notado que, después de mover el archivo styles.css a una nueva carpeta llamada "styles", se perdió el estilo de tu sitio. Para corregir esto, debes actualizar la ruta del archivo CSS en tu archivo index.html. Además, en el archivo styles.css, debes eliminar la subrayado de los enlaces en el encabezado del sitio. Después de estas correcciones, verifica si el estilo se aplicó correctamente y si los enlaces del encabezado ya no están subrayados.

5 - Estructurando la página "Sobre mí" con encabezado y pie de página

En esta actividad, estructurarás la página "Sobre mí" de tu proyecto, reutilizando el encabezado y el pie de página de la página inicial (index.html). Primero, copia el <header> y el <footer> de index.html y pégalos en el archivo about.html. Luego, agrega una sección <main> vacía entre el <header> y el <footer>. Por último, verifica si la estructura copiada funciona correctamente en el navegador, con los enlaces de navegación y el texto del pie de página mostrándose.

6 - Importando y corrigiendo la ruta del archivo CSS en la página "Sobre mí"

El objetivo de esta actividad es importar el archivo de estilos styles.css en la página "Sobre mí" y corregir la ruta del archivo para reflejar la estructura de carpetas actual. En el archivo about.html, agrega la etiqueta <link> para importar styles.css. Recuerda que el archivo CSS se movió a una carpeta llamada "styles", por lo que la ruta de href en la etiqueta <link> debe actualizarse a "./styles/styles.css". Después de esta corrección, guarda el archivo y recarga la página en el navegador para verificar si los estilos se aplicaron correctamente.



Lo que aprendimos en esta aula:

    Realizar la estilización del encabezado del portafolio;
    Crear la nueva página HTML "Sobre mí";
    Desarrollar la navegación entre las páginas "Inicio" y "Sobre mí".

### variables CSS
Aquí tienes un resumen de la clase:

    En esta clase, estamos aprendiendo sobre las variables CSS.
    Las variables CSS nos permiten definir valores que se pueden reutilizar en todo nuestro código CSS.
    Esto es útil cuando tenemos valores que se repiten, como colores o fuentes, ya que podemos definirlos una vez y luego usarlos en múltiples lugares.
    Para declarar una variable CSS, usamos la sintaxis --nombre-de-variable: valor; dentro del selector :root.
    En este ejemplo, hemos definido variables para los colores primario, secundario y terciario, así como para las fuentes Montserrat y Crola.
    Ahora que hemos declarado estas variables, podremos usarlas en nuestro código CSS en lugar de repetir los valores.
    En el próximo video, veremos cómo utilizar estas variables CSS en nuestro código.

### Para saber más: las variables en el mundo de la programación

¡Un armario lleno de cajones!

Imagina que trabajas en una sala de archivos que tiene un armario muy grande y lleno de cajones. Todos los días, las personas traen sus objetos para que los guardes en un cajón para ellos y, para ello, te entregan una etiqueta con un nombre que se pegará en ese cajón que almacenará el objeto de la persona.

Ana te entregó un bolígrafo y una etiqueta con el nombre: bolígrafoDeAna, y guardaste su bolígrafo en un cajón, donde pegaste la etiqueta. Ella eligió el nombre bolígrafoDeAna, pero podría haber sido cualquier otro nombre y su contenido también podría haber sido cualquier cosa, como un libro, por ejemplo, y no un bolígrafo.

Cuando Ana necesite el bolígrafo, te llamará y pedirá el bolígrafoDeAna, y tú le entregarás el contenido del cajón, es decir, el bolígrafo.

¿Y cómo se relaciona esto con las variables?

Tu armario de cajones en el ejemplo anterior representa la memoria de la computadora. Cuando creamos una variable, estamos solicitando a la computadora que reserve un "cajoncito" en su memoria para guardar algo que necesitaremos usar en el futuro, y lo hacemos asignando un nombre de variable que podremos llamar en cualquier momento y que devolverá el contenido que guardamos dentro de ella. Este nombre puede ser cualquier nombre, sin embargo, cada vez que se solicita, devolverá como respuesta lo que hayas almacenado en él.

¿Qué son las variables?

Las variables son elementos que permiten manipular valores durante la ejecución de tu código, mediante la definición de un nombre para almacenar un valor que se utilizará repetidamente. Esta definición del nombre y del contenido que se contendrá en él es lo que llamamos declaración.

Este valor puede cambiar a lo largo del código, por eso el nombre "variable".

Observa el siguiente ejemplo:

:root{
     --tamano-de-la-fuente:  24px;
}

Hemos creado en :root, es decir, en el alcance global de un código, una variable que se declaró con el nombre --tamano-de-la-fuente y se le asignó un valor de 24px. Cada vez que llamemos por el nombre --tamano-de-la-fuente, obtendremos como resultado el valor 24px.

Las variables son utilizadas diariamente por las personas desarrolladoras para poder manipular y reutilizar valores en su código y están presentes en los más diversos lenguajes de programación, ya que son elementos fundamentales para crear cualquier código que tenga la mínima funcionalidad. Por lo tanto, a medida que avances en tus conocimientos en desarrollo, es seguro que trabajarás mucho con variables.

Para obtener más información sobre las variables en CSS, puedes consultar la documentación.
https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties

### Haga lo que hicimos en aula


En esta clase conocimos las variables CSS y descubrimos su potencial para la personalización del proyecto.

Ahora, nos gustaría invitarte a hacer lo mismo que se hizo en clase y buscar otras paletas de colores que puedan aplicarse en el proyecto a través de las variables CSS que creamos.

Los colores tienen un gran impacto y al cambiarlos puedes obtener un proyecto con un aspecto totalmente nuevo. Si deseas buscar paletas como se hizo en clase, puedes acceder a Color Hunt. Otra opción interesante es la Rueda de Colores de Adobe.

Un atajo que puede facilitar mucho el proceso de cambiar los colores en todo el código para asignar en su lugar la variable es ctrl + D. Simplemente selecciona lo que deseas cambiar con el mouse y luego haz clic en ctrl + D hasta que todos los valores que deseas cambiar estén seleccionados. Esto te permitirá cambiar simultáneamente todos los valores siguientes que sean iguales a lo que seleccionaste con el mouse, como podemos ver en el gif a continuación:

gif de código CSS que muestra el uso del atajo ctrl + D. El puntero del mouse selecciona un valor de color #000000 y al presionar el atajo ctrl + D, el mismo valor queda seleccionado en la línea siguiente y se editan simultáneamente a var(--nuevo-color).

También puedes consultar otras opciones de sitios para elegir tu paleta de colores a través de Para saber más: eligiendo los colores de tu proyecto, que está en el curso 1 de HTML y CSS.

Además, también puedes cambiar otros elementos mediante la creación de variables, como el tamaño o el peso de las fuentes, por ejemplo. Recuerda que explorar las nuevas herramientas que conocemos en clase es un paso que enriquece mucho el aprendizaje =)

### Para saber más: proyectos que puedes desarrollar para seguir evolucionando



Para seguir practicando HTML y CSS, es importante que continúes desarrollando nuevos proyectos para mejorar tus conocimientos. Te hemos traído algunas sugerencias geniales:

Página de regalo

¡Imagina usar tus conocimientos en HTML y CSS para regalar algo a alguien!

Puedes crear una página homenajeando a alguien que te importe y regalársela a esa persona.

Es posible hacer una galería con tus fotos, escribir un texto muy bonito y agregar enlaces a cosas que le gusten a la persona.

Estas páginas también se hacen frecuentemente como regalo de cumpleaños.

Puedes añadir recursos como vídeos, imágenes e incluso música al proyecto.

¡De esta manera, mejorarás tus conocimientos y harás feliz a alguien!

Tiendita

¿Qué tal soltar la creatividad e inventar una tiendita de algo que te guste?

Puedes crear una página para mostrar productos de una marca ficticia que te parezca interesante y así practicar display: flex componiendo la visualización de tus productos en la página, por ejemplo.

Página de favoritos

Por último, uno de los proyectos favoritos de los estudiantes de HTML y CSS: ¡Crear una página de favoritos!

Este proyecto es muy divertido porque te permite crear una página con las cosas que más te gustan. Pueden ser películas, series, música, anime, juegos, productos, entre otros.

Aquí puedes elegir un solo tema o crear secciones para cada tema favorito.

Agrega imágenes, enlaces para ver tus favoritos, vídeos sobre ellos, etc.

Puedes ser muy creativo en este proyecto: si eliges música, por ejemplo, crea enlaces para navegar a otras páginas contando la historia de la canción que elegiste, o quién la compuso, o incluso por qué es una favorita.



Lo que aprendimos en esta aula:

    Agregar contenido a una nueva página;
    ¿Qué son las variables CSS?;
    Cómo personalizar el proyecto aplicando variables CSS.



