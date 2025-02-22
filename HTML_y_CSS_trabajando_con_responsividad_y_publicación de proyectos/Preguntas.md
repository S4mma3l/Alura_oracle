### Unidad de medida REM
Hemos realizado una mejora en nuestro código que consistió en cambiar todos los tamaños de fuente que estaban en píxeles a la unidad de medida REM.

Recordando que aún no se ha establecido un tamaño de fuente predeterminado en la raíz del proyecto, ¿qué 2 alternativas siguientes contemplan adecuadamente esta conversión de píxel a REM?

    Alternativa correta

    En píxeles font-size: 40px, en REM 2.5rem.

Como no se ha establecido un tamaño de fuente predeterminado en la raíz del proyecto, un REM por defecto del navegador equivale a 16px, por lo tanto, 40px dividido por 16px del REM es igual a 2.5rem.
Alternativa correta

En píxeles font-size: 24px, en REM 1.5rem.

Como no se ha definido un tamaño de fuente predeterminado en la raíz del proyecto, un REM por defecto del navegador equivale a 16 píxeles. Por lo tanto, 24px dividido por 16px del REM es igual a 1.5rem.
Alternativa correta

En píxeles font-size: 10px, en REM 1rem.
Alternativa correta

En píxeles font-size: 8px, en REM 1rem.


### adaptando imagenes
Imagina que estás desarrollando un sitio web personal para mostrar tu portafolio de fotografía. Quieres que las imágenes se muestren de manera elegante en cualquier dispositivo, ocupando siempre la mitad del ancho de la pantalla para no sobrecargar visualmente al visitante, pero sin perder calidad. La elección de la unidad de medida es crucial para alcanzar este objetivo de responsividad.

¿Cuál es la unidad de medida y el valor más adecuados para definir el ancho de una imagen de modo que ocupe, de manera adaptable, la mitad del tamaño de la pantalla?

    Alternativa correta

    width: 50 %;

La unidad de medida porcentual (%) se adapta al tamaño del elemento padre, en este caso, la pantalla. Establecer width: 50%; hace que la imagen ocupe la mitad del ancho de la pantalla, independientemente del tamaño del dispositivo, cumpliendo con el objetivo de responsividad.
Alternativa correta

width: 50 em;
Alternativa correta

width: 50 px;

### Media Queries
Imagina que estás trabajando como desarrollador(a) front-end en un proyecto innovador para una startup de tecnología. El proyecto es una aplicación web responsive que promete revolucionar la manera en que las personas interactúan con el contenido en línea. El diseño de la aplicación es crucial, ya que debe ser accesible y agradable en una amplia gama de dispositivos, desde smartphones hasta escritorios. Durante una reunión de equipo, recibes la tarea de ajustar los estilos de la aplicación para garantizar que se adapte perfectamente a pantallas con una anchura de hasta 700 píxeles. Para ello, necesitas configurar correctamente los puntos de quiebre (Break Points) utilizando Media Queries en CSS.

¿Cuál es el parámetro esperado por @media() para definir un tamaño de pantalla de hasta "700px" de ancho?

    Alternativa correta

    @media (width <= 700px) { ... }

Alternativa correta

@media (min-width: 700px) { ... }
Alternativa correta

@media (max-width: 700px) { ... }

Esta es la forma correcta de definir un punto de quiebre para pantallas con un ancho de hasta 700 píxeles, asegurando que los estilos dentro de esta consulta se apliquen a dispositivos con un ancho igual o inferior a 700 píxeles.

### ajustando el ancho
En el video, fue definido un ancho automático para la sección "presentación de contenido" con width: auto;, hay otra forma de hacerlo que es muy utilizada en la versión móvil.

Marque la opción a continuación que presenta la forma correcta para la versión móvil.

    Alternativa correta

    @media (max-width: 1200px) {
        .presentacion__contenido {
            width: 50%;
        }
    }

Alternativa correta

@media (max-width: 1200px) {
    .presentacion__contenido {
        width: 500px;
    }
}

Alternativa correta

@media (max-width: 1200px) {
    .presentacion__contenido {
        width: 100%;
    }
}

De esta manera, aplicando el 100% en el ancho de la página responsiva, obtendrá el mismo resultado que con width: auto; y se ajustará automáticamente al tamaño de la pantalla.