### Iniciando el proyecto
Las buenas prácticas en la organización de un proyecto pueden considerarse uno de los pilares fundamentales en las etapas iniciales del desarrollo. Es muy importante comenzar de la manera correcta. Teniendo en cuenta lo que vimos anteriormente, podemos afirmar que:

    Alternativa correta

    Es una buena práctica crear carpetas y subcarpetas que expliquen y organicen los archivos de código de manera lógica.

No siempre tus proyectos tendrán solo dos o tres archivos, dependiendo del nivel de complejidad, podemos llegar a tener cientos de archivos. Por lo tanto, es una buena práctica separar archivos por categorías claras y objetivas haciendo uso de carpetas y subcarpetas.
Alternativa correta

Es una buena práctica usar títulos no descriptivos en las subcarpetas para que podamos abarcar la mayor cantidad de material posible por carpeta de forma organizada y lógica.
Alternativa correta

Es una buena práctica mantener nuestros proyectos siempre en el escritorio, ya que este es el punto de acceso más fácil en el sistema y de mejor organización.

### El nombre del archivo
En el mundo fantástico de Pokémon, los entrenadores Pokémon deciden crear un sitio web, el Pokémart.com: un sitio de comercio electrónico donde los entrenadores pueden comprar y vender artículos, como Pokébolas, Pociones y Bayas. Para empezar, por ahora, siguiendo nuestro estándar, necesitas crear un archivo llamado:

    Alternativa correta

    index.html

Es la página principal que el navegador carga al visitar el sitio.
Alternativa correta

google.js
Alternativa correta

google.html
Alternativa correta

index.css

### creando tu archivo HTML principal
Al crear un nuevo proyecto, es común seguir un patrón para nombrar su archivo principal y para estructurar la jerarquía de archivos. De las alternativas a continuación, señala la que presenta la jerarquía correcta de un proyecto HTML:

    Alternativa correta

    Carpeta del proyecto

    index.html

    archivos del proyecto

El término "index" significa "índice", ya que esta página principal contendrá los enlaces que redirigen a las otras páginas de tu proyecto. Por lo tanto, este nombre facilita que este archivo sea reconocido como "estándar" dentro de su carpeta y será la primera página cargada siempre que se abra tu proyecto.
Alternativa correta

Index.html

carpeta del proyecto

archivos del proyecto
Alternativa correta

Archivos del proyecto

index.html

carpeta del proyecto

### Haga lo que hicimos en aula
En esta lección, aprendimos que para insertar una imagen en tu página es necesario utilizar la etiqueta <img>. Pensando en eso, considera el siguiente código:

<!DOCTYPE html>
<html>
    <head>
        <title>Portafolio</title>
    </head>
    <body>
        <h1>Esto es un título</h1>
        <p>Esto es un párrafo</p>
        <img scr="html5.png" alt="Logo de HTML 5">
    </body>
</html>

Marca las alternativas correctas respecto al código anterior:

    Alternativa correta

    Solo se mostrará el texto alternativo y la imagen estará no disponible, porque se escribió incorrectamente el atributo src de la etiqueta <img>.

Alternativa correta

El uso del atributo alt es una buena práctica, pero no hará ninguna diferencia en la visualización de la página en este caso específico.
Alternativa correta

La imagen no se mostrará porque la etiqueta no se cerró correctamente con </img>, lo que causará un problema en el código.
Alternativa correta

La imagen solo se mostrará si hay un archivo de imagen llamado "html5.png" guardado dentro de la carpeta del proyecto.

Es común, especialmente al principio, equivocarse en la ruta de la imagen y no poder verlas. Por eso, es esencial que la ruta dentro del atributo src coincida con el nombre del archivo de imagen.

### Quirks Mode
Como vimos en esta clase, el uso de <!DOCTYPE html> es muy importante para que el navegador utilice el modo estándar y no el "Quirks Mode". Pensando en eso, señala la alternativa correcta:

    Alternativa correta

    Evitamos el Quirks Mode utilizando <!DOCTYPE html> para declarar la versión de HTML, pero esta declaración no funciona si no escribimos "DOCTYPE" en mayúsculas y html en minúsculas.

Alternativa correta

El Quirks Mode es el modo en que el navegador adapta páginas web que están en versiones antiguas para que funcionen, lo que puede romper tu página en HTML 5. Por lo tanto, este modo debe evitarse mediante el uso de <!DOCTYPE html>.

El Quirks Mode (modo peculiaridad) adapta las páginas antiguas que no están en la versión 5 de HTML para que funcionen normalmente, causando problemas en las páginas HTML 5. Para evitarlo, simplemente aplica <!DOCTYPE html> antes de abrir la etiqueta <html>, haciendo que el navegador reconozca la versión 5 de HTML y funcione en modo estándar.
Alternativa correta

El <!DOCTYPE html> es responsable de evitar el Quirks Mode, ya que le informa al navegador que el archivo que se está mostrando es de tipo HTML y no un archivo con otra extensión, como por ejemplo un archivo de texto, que sería TXT.

###  Comprendiendo las meta etiquetas iniciales
Imagina que estás comenzando tu trabajo como desarrollador(a) web en la creación de un nuevo sitio web sobre tecnología. En el primer día, tu jefe te pide que configures las meta etiquetas de una página HTML, asegurándote de que sea interpretada correctamente por los navegadores y dispositivos móviles. Menciona que debes recordar las meta etiquetas básicas que se enseñaron en el curso "Meta Tags" que completaste recientemente.

¿Cuál de las siguientes opciones de código deberías insertar en la sección
del HTML para cumplir con el pedido de tu jefe?

    Alternativa correta

    <meta charset="ISO-8859-1">
    <meta name="viewport" content="user-scalable=no">

Alternativa correta

<meta name="viewport" content="width=1024">
<meta name="description" content="Una página sobre tecnología">

Alternativa correta

<meta charset="UTF-8">
<meta name="author" content="Tu Nombre">

Alternativa correta

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Esta opción utiliza el conjunto de caracteres "UTF-8", que es el estándar para admitir una amplia gama de caracteres, y configura correctamente las opciones del viewport para dispositivos móviles.
Alternativa correta

<meta charset="ASCII">
<meta name="viewport" content="width=device-width, initial-scale=2.0">

### Usando etiquetas semánticas
Vimos en las clases que para escribir un título, un párrafo, necesitamos respetar una estructura básica de HTML. Ante esto, ¿cuál de las siguientes alternativas contempla la estructura correcta para obtener como resultado un título y dos párrafos según el ejemplo a continuación?

Alura Latam - ¡Sumérgete en Tecnología!

Vas a estudiar, practicar, discutir y profundizar en una plataforma que respira tecnología. Sumérgete con profundidad y navega en otras áreas de Tecnología. Profesional en T.

    Alternativa correta

    <h1>Alura Latam - ¡Sumérgete en Tecnología!</h1>
    <p>Vas a estudiar, practicar, discutir y profundizar en una plataforma que respira tecnología.</p>
    <p>Sumérgete con profundidad y navega en otras áreas de Tecnología. Profesional en T </p>

Así es, para crear un título destacado, abrimos la etiqueta con <h1> y cerramos con </h1>. Y para agregar párrafos usamos las etiquetas <p> también cerrando con </p>.
Alternativa correta

<title>Alura Latam - ¡Sumérgete en Tecnología!</title>
<p>Vas a estudiar, practicar, discutir y profundizar en una plataforma que respira tecnología.</p>
<p>Sumérgete con profundidad y navega en otras áreas de Tecnología. Profesional en T</p>

Alternativa correta

<h1>Alura Latam - ¡Sumérgete en Tecnología!</h1>
<h2>Vas a estudiar, practicar, discutir y profundizar en una plataforma que respira tecnología.</h2>
<p>Sumérgete con profundidad y navega en otras áreas de Tecnología. Profesional en T </p>

Alternativa correta

<h1>Alura Latam - ¡Sumérgete en Tecnología!<h1>
<p>Vas a estudiar, practicar, discutir y profundizar en una plataforma que respira tecnología.<p>
<p>Sumérgete con profundidad y navega en otras áreas de Tecnología. Profesional en T<p>

### Diferencia entre ancla y botón
Hemos visto que para desarrollar diferentes funcionalidades en HTML, es necesario comprender el comportamiento de las etiquetas y que, aunque a menudo dos o más etiquetas sean similares en nombre o propósito, cada una es específica para cierta situación. De esta manera, pensando en las etiquetas <button> para botones y <a> para anclas, marca la alternativa correcta que indique la diferencia entre ellas:

    Alternativa correta

    Ambas etiquetas son diferentes en nombre, pero idénticas en propósito, ya que ambas se utilizan para indicar que hay un botón clicleable listo para realizar una acción.

Alternativa correta

Ambas etiquetas son completamente diferentes, ya que mientras <button> indica un enlace clicleable que lleva al usuario a otra página, <a> es responsable de la creación visual de un botón.
Alternativa correta

La etiqueta <button> es diferente de la etiqueta <a>, ya que, además de la semántica, también tiene un propósito diferente. Usamos <button> para crear un botón de acción y <a> para indicar un enlace.

Las etiquetas son diferentes en ambos aspectos y es necesario saber utilizar cada una en su función correcta. Mientras que <button> se puede utilizar para acciones como enviar formularios, la etiqueta <a> no tiene esa funcionalidad, ya que su papel es simplemente redirigir al usuario a diferentes URLs.

### Incluyendo CSS en la página
En el video anterior, aprendiste que las "Hojas de Estilo en Cascada" (CSS) describen un conjunto de reglas de formato que controlan la apariencia de una página web. Pensando en eso, marca la alternativa correcta que presente la buena práctica recomendada al utilizar CSS:

    Alternativa correta

    Se recomienda crear un archivo CSS externo con extensión .css e incluirlo en la estructura head del HTML. De esta manera, podemos tener una estructura de estilos universal para varias páginas.

El CSS externo es el más indicado y recomendado, ya que, además de que tus archivos HTML quedarán con una estructura más limpia y un tamaño menor, los mismos estilos del archivo .css pueden utilizarse en varias páginas.
Alternativa correta

Se recomienda escribir el CSS internamente en el archivo HTML a través de la etiqueta <style> dentro de la etiqueta <head> de la página. Esto permite organizar mejor nuestro código.
Alternativa correta

Lo ideal es utilizar el atributo style en elementos HTML para estilizar nuestro contenido de una manera simple y directa. Esta forma es conocida como Inline.

###  Estilizando el HTML con CSS
La forma correcta de incluir estilos CSS en los elementos HTML es conectar la hoja de estilos correctamente en el documento HTML mediante una etiqueta <link>; de lo contrario, los estilos no se aplicarán.

De las alternativas a continuación, selecciona aquella que presenta la forma correcta de escribir la etiqueta <link> y el lugar donde debe contener esa etiqueta:

    Alternativa correta

    <head>
     <link rel="stylesheet">
    </head>

Alternativa correta

<head>
 <link rel="stylesheet" href="nomedoarquivo.css">
 </head>

HTML no reconoce la página de estilo automáticamente, por lo que es necesario agregar la etiqueta <link rel="stylesheet" href="nomedoarquivo.css"> dentro de la etiqueta <head> para que se aplique el estilo.
Alternativa correta

<header>
 <link rel="stylesheet" href="nomedoarquivo.css">
 </header>

Alternativa correta

<head>
 <link rel="stylesheet" href="nomedoarquivo.css"></link>
</head>

### Color de fondo
¿Cuál de las alternativas cambia el color de fondo para rojo(red)?

    Alternativa correta

    body {
      background-color: blue;
      color: red;
      font-family: 'Comic Sans MS', sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }

Alternativa correta

body {
  background-color: red;
  color: blue;
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

Background-color es el atributo que cambia el color del fondo.
Alternativa correta

body {
  back-color: red;
  color: blue;
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}



