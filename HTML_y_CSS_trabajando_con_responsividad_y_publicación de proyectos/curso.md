###  La unidad de medida EM
Aquí tienes un resumen de la clase:

    Estamos trabajando con un proyecto que no es accesible porque usamos unidades de medida absolutas como píxeles.
    Para hacer el proyecto más accesible, debemos cambiar a unidades de medida relativas.
    Las unidades de medida relativas más comunes son em y rem.
    Em es una unidad relativa al tamaño de fuente del elemento padre.
    Esto puede ser complicado de calcular cuando hay varios niveles de anidamiento.
    Por eso, se recomienda usar la unidad rem, que es relativa al tamaño de fuente del elemento raíz (html).
    En el próximo video, veremos cómo usar la unidad rem para hacer nuestro proyecto más accesible.

### Conociendo y aplicando la unidade REM
Imagina que tienes una casa y cada habitación tiene un tamaño diferente. Algunas habitaciones son más grandes y otras más pequeñas. Ahora, en lugar de medir cada habitación con una regla diferente, usamos una medida estándar, como el metro.

De la misma manera, en CSS tenemos diferentes unidades de medida, como píxeles, porcentajes, etc. Pero la unidad REM es como usar el metro en nuestra casa. El REM siempre se basa en el tamaño de letra del elemento raíz (normalmente el <body>), que es de 16 píxeles por defecto.

Entonces, si tenemos un elemento con un tamaño de letra de 3 REM, eso significa que su tamaño será de 48 píxeles (3 x 16), sin importar el tamaño de letra de sus elementos padres. Es mucho más fácil de calcular que tener que hacer cuentas con píxeles.

¿Te imaginas tener que medir cada habitación de tu casa con una regla diferente? Sería muy complicado. Pues bien, el REM es como tener una medida estándar en toda tu casa (o en todo tu proyecto web).

¿Te queda más claro ahora? Espero que esta analogía de la casa te haya ayudado a entender mejor el concepto del REM. Si tienes más dudas, no dudes en preguntar.
Copiar texto de Luri al portapapeles
FAQ
Enviar feedback
Historial de conversaciones

###  Para saber más: la importancia de utilizar unidades de medida relativas


Es muy importante utilizar unidades de medida relativas en los textos y títulos, e incluso en los elementos de nuestro sitio web, como por ejemplo, las imágenes.

Estas medidas ayudan a las personas con baja visión que necesitan cambiar la apariencia del navegador o aplicar más zoom para aumentar el tamaño de los elementos.

Recuerda que también podemos reducir el zoom de la página cuando queramos tener una visión más amplia de los elementos. ¡Muy útil, ¿verdad?! :)

Este artículo de Alura sobre unidades de medida puede ser de gran ayuda para tu aprendizaje: Artículo sobre unidades de medida.

También puedes consultar la documentación sobre las unidades de medida que se utilizaron en este curso.
https://www.aluracursos.com/blog/guia-de-unidades-en-css
https://www.w3schools.com/cssref/css_units.php

### Haga lo que hicimos


Qué es:

Bienvenido a nuestra lista de ejercicios "Manos a la obra", un camino práctico e involucrante para aprender y mejorar tus habilidades en tecnología. Aquí, no encontrarás largas lecturas teóricas o explicaciones abstractas. En cambio, nuestros ejercicios están diseñados para ponerte en el centro del proceso de aprendizaje, permitiéndote construir, experimentar y explorar conceptos tecnológicos de manera directa y aplicada.

Para qué sirve:

Esta lista es una herramienta dinámica para aprender, reforzar y mejorar habilidades prácticas en programación y desarrollo web. Cada ejercicio es una oportunidad para aplicar conocimientos teóricos en escenarios reales, preparándote no solo para entender la tecnología, sino también para utilizarla de manera efectiva y creativa en tus propios proyectos o en el entorno laboral.

Cómo hacerlo:

    Lee cada ejercicio con atención: comienza entendiendo el escenario propuesto y qué se espera como resultado.
    Escribe el código: utiliza el entorno de codificación de tu elección para escribir y probar tu código. No te preocupes si no aciertas a la primera, la práctica lleva a la perfección.
    Verifica la solución: después de intentar resolver el ejercicio, compara tu código con la solución proporcionada en "Opinión del instructor". Esto te ayudará a identificar áreas de mejora y consolidar el aprendizaje.
    Repite: la repetición es clave para el aprendizaje. Intenta hacer los ejercicios más de una vez, aplicando mejoras y variantes.

Recuerda, cada desafío es una oportunidad para crecer. No te desanimes por los errores; son pasos en el camino del aprendizaje. ¡Y sobre todo, diviértete! El aprendizaje más efectivo ocurre cuando nos involucramos y nos interesamos en lo que estamos haciendo.

¡No olvides que estamos en el Foro y en Discord para ayudarte!

¡Buenos estudios!

1) Adaptando el cuerpo del texto a unidades relativas:

En esta actividad, adaptarás el cuerpo del texto de tu proyecto para responder mejor a las configuraciones del navegador del usuario. Selecciona elementos de texto, como párrafos (<p>) o subtítulos (<h2>), en el archivo style.css y cambia la unidad de medida del font-size de px a rem. Por ejemplo, si un párrafo tiene font-size: 18px, conviértelo a 1.125rem (18 / 16 = 1.125). Después de hacer el cambio, guarda el archivo y prueba el comportamiento del texto cambiando el tamaño de la fuente en las configuraciones de apariencia del navegador.

2) Convirtiendo píxeles a rem en CSS:

Estás trabajando en un proyecto de sitio web y te han encargado actualizar el CSS para mejorar la responsividad del texto. Tu objetivo es convertir todas las unidades de font-size de píxeles a rem, siguiendo el ejemplo que mostraron Guilherme y Rafaela. Comienza buscando todas las instancias de font-size en el archivo styles.css y realiza la conversión. Recuerda que el valor predeterminado para 1rem es 16px. Por ejemplo, si encuentras font-size: 24px;, debes convertirlo a font-size: 1.5rem;.

3) Mejorando la responsividad de un sitio web:

Ahora tu desafío es probar la responsividad del sitio después de los cambios realizados en el font-size. Para ello, abre la página del portafolio en el navegador y cambia las configuraciones de tamaño de fuente (Muy grande, Grande, Mediano, Pequeño y Muy pequeño). Observa cómo se adaptan los textos del sitio a cada cambio y toma notas sobre cualquier problema de diseño o legibilidad que encuentres. Esto ayudará a identificar si los cambios realizados realmente mejoraron la experiencia del usuario en diferentes configuraciones.

4) Ajustando el CSS para diferentes tamaños de fuente:

Después de probar la responsividad del sitio, has notado que algunas secciones no se adaptan bien a tamaños de fuente muy grandes o muy pequeños. Ahora tu tarea es ajustar el CSS para garantizar que el sitio permanezca legible y visualmente agradable en todos los tamaños de fuente. Esto puede implicar ajustar márgenes, rellenos o incluso el font-size de algunas secciones específicas. Realiza los cambios necesarios en el archivo styles.css y prueba nuevamente la responsividad en diferentes tamaños de fuente.

En esta clase, aprendiste:

    Sobre medidas relativas y absolutas;
    A utilizar la documentación sobre unidades de medida;
    A utilizar la unidad de medida REM;
    A cambiar la apariencia del navegador en configuraciones.

### Descubre la super unidad de medida
Imagina que tienes una habitación en tu casa y quieres que se adapte a diferentes tamaños de muebles. La clase presentacion_imagen sería como el espacio que reservas para colocar una imagen en esa habitación. Al definir que la imagen ocupe el 50% del ancho de la habitación, estás asegurándote de que, sin importar el tamaño de la imagen, siempre va a caber y ocupar la mitad del espacio disponible.

Ahora, los botones serían como los muebles que quieres colocar en esa misma habitación. Inicialmente, tenían un tamaño fijo, como si fueran muebles de un tamaño específico. Pero al cambiar el ancho de los botones a 50%, estás haciendo que se adapten al espacio disponible, al igual que si cambiaras el tamaño de los muebles para que encajen mejor en la habitación.

Por último, la clase presentacion_contenido sería como el espacio restante en la habitación, después de haber reservado el 50% para la imagen. Al definir que este contenido también ocupe el 50% del ancho, estás asegurándote de que tanto la imagen como el contenido se adapten de manera proporcional al tamaño de la habitación.

De esta forma, al hacer que todos los elementos se adapten a un porcentaje del espacio disponible, estás logrando que tu diseño sea más responsivo y se ajuste mejor a diferentes tamaños de pantalla, al igual que si cambiaras el tamaño de los muebles en una habitación para que se adapten a diferentes espacios.

¿Tiene sentido esta analogía? Espero que te ayude a entender mejor cómo funciona la adaptación de los elementos en tu proyecto.

### Para saber más: Dev Tools - La mejor amiga de quien desarrolla


La herramienta de desarrollo (Dev Tool) es muy útil en el proceso de creación y desarrollo de proyectos web. Además de inspeccionar nuestros códigos HTML y CSS, podemos realizar algunos cambios temporales y nos muestra una vista previa en diferentes tamaños de pantalla y dispositivos, como tabletas y teléfonos móviles, lo cual es de gran ayuda al crear la versión móvil y toda la parte responsiva.

¿Te gusta? :) ¡Ahora tú también puedes intentarlo!

Para abrir las Dev Tools, cuando tengas el navegador abierto, presiona las teclas CTRL + SHIFT + C en Chrome para Windows, o COMMAND + OPTION + C en Mac, o puedes hacer clic con el botón derecho del mouse en la pantalla del navegador y seleccionar "inspeccionar" en el menú desplegable. Mira:

Con las Dev Tools abiertas, puedes:

    Seleccionar el tipo de dispositivo (móvil, tableta, etc.);
    Inspeccionar los elementos HTML;
    Cambiar el tamaño de la pantalla;
    Cambiar temporalmente los estilos CSS de la página;
    Presionar las teclas CTRL + SHIFT + M para abrir la vista responsiva.

### Haga lo que hicimos


1) Adaptando imágenes para diferentes tamaños de pantalla

Estás trabajando en un sitio web y necesitas asegurarte de que las imágenes se adapten correctamente a diferentes tamaños de pantalla. Tu tarea es añadir una clase "presentacion__imagen" a las imágenes relevantes en el HTML y definir el ancho de esta clase como 50% en el CSS. Esto hará que las imágenes ocupen el 50% del ancho del elemento padre. Asegúrate de probar en diferentes anchos de pantalla, como 720px, para verificar la responsividad.

2) Ajustando el diseño para diferentes dispositivos

El diseño de tu sitio web necesita ser ajustado para diferentes dispositivos. Utiliza la herramienta "Inspeccionar" del navegador para simular diferentes tamaños de pantalla, como un portátil. Ajusta el diseño de la página para que se adapte de manera armoniosa en pantallas más pequeñas. Esto puede implicar cambiar márgenes, rellenos e incluso reorganizar elementos en la página.

3) Responsividad del contenido de texto

El contenido de texto de tu sitio web no se está adaptando bien a pantallas más pequeñas. Necesitas ajustar la clase ".presentacion__contenido" en el CSS para utilizar anchos relativos en lugar de fijos. Intenta definir el ancho como 50% y observa cómo el texto se adapta cuando cambias el tamaño de la pantalla. Recuerda que la responsividad es clave para una buena experiencia del usuario en dispositivos diversos.

4) Mejorando la responsividad de los enlaces de navegación

Los enlaces de navegación de tu sitio web no están funcionando adecuadamente en diferentes tamaños de pantalla. Tu tarea es ajustar la clase ".presentacion__enlaces__link" en el CSS. Cambia el ancho a un valor relativo, como 50%, y prueba en diferentes tamaños de pantalla. Observa cómo responden los enlaces a estos cambios y ajusta según sea necesario para garantizar una navegación fluida y accesible.



En esta clase, aprendiste:

    Adaptar elementos;
    Utilizar la herramienta de DevTools;
    Visualizar nuestro proyecto en la versión responsiva;
    Cambiar el tamaño de la visualización en la pantalla;
    Adaptar elementos utilizando las unidades de medida relativas.

### Media Queries
Imagina que tienes una casa con diferentes habitaciones. Cada habitación tiene un propósito específico y está diseñada para ciertas actividades. Las Media Queries son como las puertas que conectan estas habitaciones.

Cuando la pantalla de tu dispositivo es más grande, es como si estuvieras en una habitación amplia y espaciosa. Pero cuando la pantalla se vuelve más pequeña, es como si estuvieras en una habitación más estrecha. Las Media Queries te permiten cambiar la disposición de los elementos en tu página web, adaptándolos al tamaño de la pantalla, al igual que cambiarías la distribución de los muebles en una habitación más pequeña.

Por ejemplo, cuando la pantalla es grande, los elementos de tu página web pueden estar distribuidos horizontalmente, como los muebles en una sala amplia. Pero cuando la pantalla se reduce, las Media Queries te permiten cambiar esa distribución a una disposición vertical, como acomodar los muebles en una habitación más estrecha.

Así como en una casa tienes diferentes habitaciones para diferentes propósitos, en tu página web puedes tener diferentes estilos y diseños para diferentes tamaños de pantalla, utilizando las Media Queries como las puertas que conectan esas "habitaciones" virtuales.

¿Entiendes mejor la idea de cómo funcionan las Media Queries con esta analogía de la casa? Espero que esta explicación te haya ayudado a visualizar mejor cómo puedes usar esta herramienta en tu desarrollo web.

### Encabezado responsivo
Imagina que nuestro sitio web es como una casa. El encabezado sería como la entrada principal de la casa. Cuando alguien llega a la casa, lo primero que ve es la entrada.

En la versión de escritorio, la entrada (el encabezado) tiene un poco de espacio en la parte superior, como si hubiera una pequeña escalera antes de llegar a la puerta. Y en los lados, hay un espacio de 15% a la izquierda, como si hubiera un pequeño jardín o algo así.

Ahora, en la versión móvil, queremos ajustar un poco la entrada. En lugar de tener esa pequeña escalera en la parte superior, vamos a reducir el espacio y ponerlo en 10% en todos los lados, como si la entrada estuviera más al ras del suelo.

Además, queremos centrar la entrada, para que cuando alguien llegue, lo primero que vea sea justo el centro de la puerta. Para hacer esto, vamos a utilizar la clase "header menu", que ya tiene la propiedad de "display flex", que es como si la entrada tuviera una cinta transportadora que lleva a las personas directamente al centro.

¿Entiendes la analogía? Espero que esta explicación con analogías haya sido más clara y fácil de entender.

### Para saber mas


¿Sabías que puedes tener más de una media query en tu proyecto? Es posible definir un tamaño de pantalla para el celular, otro para la tableta y dejar el "predeterminado" para el escritorio.

Por ejemplo:

Podemos definir un ancho máximo de "480px" para el celular: @media (max-width: 480px), y en otra media query definir un ancho máximo de "800px" para las tabletas: @media (max-width: 800px), y luego asignamos los ajustes necesarios dentro de cada media query, de esta manera tendremos nuestro sitio 100% responsivo.

También podemos definir rangos para los tamaños de pantalla con una única media query, asignamos el valor mínimo y luego el valor máximo separándolos con el atributo "and", así: @media (min-width: 480px ) and (max-width: 800px), en este caso, los estilos se aplicarán en pantallas de al menos "480px" y como máximo "800px".

Recordando que la mayoría de los accesos a internet hoy en día se realizan a través de dispositivos móviles, por lo tanto, no olvides siempre hacer que tus proyectos y sitios sean responsivos.

Para aprender más, visita el sitio de Mozilla y lee la documentación sobre media queries.
https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries

### Para saber mas: que es la resposividad?


¿Has notado que cuando accedemos a algunos sitios web, cambian su diseño dependiendo del dispositivo? Por ejemplo, si accedes al sitio web de Alura en una computadora, el diseño será un poco diferente que si lo accedes desde un celular.

Pero, ¿qué herramienta es responsable de esto?

¡La responsividad! Cuando el sitio web adapta el tamaño de sus páginas (diseño) según el tamaño de la pantalla del dispositivo desde el cual se accede o cuando reducimos el tamaño de la ventana del navegador (esta transformación también se puede hacer cuando aplicamos un zoom en la página), decimos que este sitio web es responsivo.

La responsividad no solo cambia el tamaño de las fuentes y elementos, sino que también soporta cualquier cambio, como por ejemplo: en el color de fondo, color de texto, bordes, etc. Esto depende de los estilos aplicados dentro de la media query en el archivo CSS.

Si asignas un color de fondo diferente al body dentro de la media query, el color solo cambiará cuando la pantalla alcance el tamaño definido por ella.

En este ejemplo, se aplicó el color morado al body dentro de la media query en el proyecto para pantallas de máximo 1200 píxeles. ¡Mira qué genial es el resultado!

Puedes aprender mucho más aquí en Alura sobre responsividad a través de este excelente curso sobre CSS: Flexbox e Layouts Responsivos.
https://app.aluracursos.com/course/css-flexbox-layouts-responsivos?utm_source=gnarus&utm_medium=timeline

### Haga lo que hicimos


1) Ajustando el diseño para pantallas más pequeñas

Estás trabajando en un proyecto de portafolio y has notado que, al reducir el tamaño de la pantalla, los elementos comienzan a comportarse de manera no deseada, con la imagen pegada al texto. Tu desafío es ajustar el diseño de la página para que, al reducir la pantalla, haya un espacio adecuado entre los elementos. Utiliza la propiedad "gap" en CSS para crear un espacio entre el contenido y la imagen dentro de la clase ".presentacion".

2) Implementando media queries para cambios en el diseño

Cuando el ancho de la pantalla alcanza alrededor de 1300px, notas que la imagen en la página del portafolio queda aislada en el lado derecho. Tu objetivo ahora es cambiar el diseño para que, en pantallas más pequeñas que 1023px, la imagen se posicione sobre el texto, siguiendo el diseño móvil en Figma. Para esto, implementa una media query en CSS que modifique la disposición de los elementos de la clase ".presentacion" a una columna cuando la pantalla sea menor que 1023px.

3) Refinando el diseño responsivo

Ahora que has ajustado el diseño para pantallas más pequeñas, has notado que el orden de los elementos en la clase ".presentacion" no está conforme al diseño de Figma, donde la imagen debería aparecer sobre el texto. Tu desafío es cambiar el orden de los elementos dentro de esta clase cuando la pantalla sea inferior a 1200px de ancho. Utiliza la propiedad "flex-direction" en CSS con el valor "column-reverse" en la media query para invertir el orden de los elementos.

4) Ajustando el encabezado para pantallas más pequeñas

En este desafío, necesitas ajustar el encabezado de la página del portafolio para dispositivos con pantallas más pequeñas. Actualmente, el encabezado (header) está demasiado a la izquierda y se desborda en ciertos puntos. Cambia el "padding" de la clase ".encabezado" en CSS para que esté más centrado y con un espacio adecuado en la parte superior de la pantalla, según el diseño móvil en Figma.

5) Centrando elementos del menú en pantallas más pequeñas

Ahora que se ha ajustado el "padding" del encabezado, tu siguiente paso es centrar los elementos "Inicio" y "Sobre mí" que están dentro del encabezado. Para ello, utiliza "flexbox" en la clase ".header__menu". Verifica si la propiedad "display: flex" ya está aplicada y agrega "justify-content: center" para alinear los elementos centralmente.

6) Refinando el diseño responsivo del encabezado

Finalmente, verifica y perfecciona el diseño del encabezado para pantallas más pequeñas. Realiza los ajustes necesarios en el "padding" y en las propiedades de "flexbox" para que el encabezado esté visualmente alineado con el diseño de Figma. Prueba diferentes valores de "padding" y ajusta la propiedad "justify-content" para obtener el mejor resultado.

En esta clase, aprendiste:

    Qué es la media query;
    Qué es la responsividad;
    Cómo adaptar nuestro sitio para diferentes tamaños de pantalla;
    Que la unidad de medida porcentaje es amiga de la responsividad.

### Contenido responsivo
Claro, voy a explicar la clase utilizando analogías para que sea más fácil de entender.

Imagina que tienes una caja grande que representa el elemento "padre" o contenedor. Dentro de esa caja, tienes un objeto que representa el contenido.

Cuando usas width: 50%, es como si le dijeras al objeto "ocupa la mitad del espacio dentro de la caja". Esto significa que el objeto siempre tendrá un ancho fijo, sin importar el tamaño de la caja.

En cambio, cuando usas width: auto, es como si le dijeras al objeto "ajústate al tamaño de la caja". Esto significa que el objeto se adaptará al espacio disponible dentro de la caja, sin tener un ancho fijo.

La diferencia clave es que con width: auto, el objeto se ajustará automáticamente al tamaño de la caja, mientras que con width: 50%, el objeto siempre ocupará la mitad del espacio, sin importar el tamaño de la caja.

Esto es importante para lograr un diseño responsivo, ya que permite que el contenido se adapte a diferentes tamaños de pantalla sin verse apretado o deformado.

¿Tiene sentido esta analogía? ¿Necesitas que lo explique de alguna otra manera?

### Haga lo que hicimos


1) Ajustando el espaciado para pantallas más pequeñas

Estás trabajando en un proyecto web y notas que el diseño para pantallas más pequeñas necesita ser mejorado. El contenido parece estar "apretado" en el centro, debido al espacio excesivo en los laterales. Tu objetivo es ajustar el "padding" de la clase .presentacion en CSS para mejorar la visualización en dispositivos más pequeños.

2) Refinando el ancho del contenido en dispositivos más pequeños

Después de ajustar el espaciado, te das cuenta de que el contenido dentro de la clase .presentacion__contenido aún ocupa mucho espacio en pantallas más pequeñas. Tu desafío ahora es ajustar el ancho de esta clase para que se ajuste al nuevo "padding" aplicado en la clase .presentacion.

3) Evaluando el efecto de "width: auto" en dispositivos más pequeños

La última tarea implica evaluar el impacto del cambio de "width" a "auto" en la clase .presentacion__contenido. Necesitas verificar si el ancho del contenido se adapta correctamente al "padding" del 5% aplicado, asegurando una visualización adecuada en pantallas más pequeñas.

4) Creando una cuenta en GitHub

En este ejercicio, crearás una cuenta en GitHub, una plataforma esencial para cualquier persona que trabaje en desarrollo web. GitHub permite alojar y compartir proyectos, facilitando la colaboración. Tu tarea es navegar por el proceso de registro en GitHub, configurar tu cuenta y explorar las principales funcionalidades disponibles.

5) Subiendo un proyecto a GitHub

Ahora que tienes una cuenta en GitHub, el siguiente paso es aprender a "subir" un proyecto. Utilizarás GitHub para alojar tu proyecto web, que incluye archivos HTML, CSS, JavaScript, entre otros. El enfoque estará en el proceso de crear un nuevo repositorio y cargar los archivos de tu proyecto en GitHub.

En esta clase, aprendiste:

    Un poco más sobre responsividad;
    Qué es Git y GitHub;
    Cómo crear una nueva cuenta en GitHub.

### Para saber más: repositorio y Readme
El Repositorio es simplemente una carpeta del proyecto que se guarda en la nube. En el caso de GitHub, creas el repositorio con el nombre de tu proyecto y subes los archivos dentro de esta carpeta. Después de crear el repositorio y colocar los archivos dentro de él, ahora puedes crear y personalizar el famoso archivo Readme.md, donde puedes especificar el proyecto y hablar más sobre él. De esta manera, otras personas que accedan a tu repositorio podrán ver y entender tu proyecto, así como las herramientas utilizadas para desarrollarlo.

La página del archivo Readme.md se puede escribir utilizando HTML o el lenguaje de marcado Markdown, siendo más común el uso de Markdown.

Puedes leer más sobre Markdown a través de este artículo.

Para aprender más sobre Readme, ver ejemplos y crear uno desde cero, visita el enlace del template sobre Readme..

También echa un vistazo a este ejemplo de Readme escrito en Markdown hecho específicamente para el repositorio de nuestro curso de HTML y CSS:

Escrito en Markdown

# Portfolio ¡Hola, bienvenido a mi proyecto de portafolio!

![imagen](https://cdn1.gnarususercontent.com.br/6/450324/9facae6f-79bf-48f3-b3a9-b4f9284802d7.png)  
## Herramientas utilizadas:

* HTML

* CSS

* Flex-box

## Hecho por:

###Ana García

### Linkedin: https://www.linkedin.com/school/aluracursos/

Ahora, ¿qué tal editar tu archivo Readme y personalizarlo a tu manera? ¡Explica un poco más sobre tu proyecto, las herramientas utilizadas, el objetivo del proyecto, etc.! Y lo más importante, ¡comparte tu experiencia de aprendizaje con otras personas! =)