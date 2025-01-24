No existe una regla específica para el mensaje de los commits, pero en la comunidad internacional, especialmente en los países de habla inglesa, se recomienda usar el imperativo al comienzo de los commits.

Además, es importante mencionar de forma descriptiva lo que se cambió, agregó o eliminó del proyecto. Durante las clases, la instructora Ellen presenta de manera didáctica y sencilla cómo hacerlo, pero en un ambiente de trabajo, cada empresa puede presentar una sintaxis estándar a seguir.

### Agregar a un colaborador

Settings
General
Collaborators

Aquí tienes un resumen de la clase:

En esta clase, aprendimos cómo agregar un colaborador a nuestro proyecto en Git y GitHub. Los pasos son:

    En la página del proyecto, hacer clic en "Settings" y luego en "Collaborators" en el menú de la izquierda.
    Hacer clic en el botón "Add people" en la parte inferior.
    Buscar al usuario que quieres agregar por su nombre de usuario, nombre completo o correo electrónico.
    Seleccionar al usuario y agregarlo al proyecto.
    El usuario recibirá una invitación por correo electrónico que debe aceptar para poder acceder al proyecto.

Una vez que el colaborador es agregado, podrá participar y contribuir al proyecto de manera conjunta. Esto es una forma muy útil de trabajar en equipo en proyectos de desarrollo de software.



Lo que aprendimos en esta aula:

    Aprendimos a acceder al VSCode por medio de GitHub;
    Invitamos a un colaborador a un repositorio de GitHub;
    Entendimos cómo verificar el historial de commits realizados.

En la siguiente aula:

¡Vamos a clonar un proyecto, entender la diferencia entre repositorio local y repositorio remoto y aprender más algunos comandos de git!

¿Sabes qué es el código abierto?

El código abierto es un código diseñado para que cualquier persona pueda acceder a él de forma abierta y pueda verlo, modificarlo y distribuirlo según sus necesidades.

### Git Diff y Git Restore

Aquí tienes un resumen de la clase:

    Aprendimos a utilizar el comando "git diff" para ver los cambios realizados en un archivo, mostrando las líneas que se han agregado (en verde) y las que se han eliminado (en rojo).
    Vimos cómo usar el comando "git restore" para volver a una versión anterior de un archivo, especificando el hash del commit al que queremos regresar.
    Repasamos cómo hacer un commit de los cambios realizados y luego hacer un "git push" para enviarlos al repositorio remoto en GitHub.
    Se explicó que estas herramientas de "git diff" y "git restore" son muy útiles cuando se trabaja en equipo, ya que permiten ver y revertir los cambios realizados en los archivos del proyecto.
    En resumen, esta clase cubrió comandos más avanzados de Git que permiten gestionar de manera más eficiente los cambios en los archivos de un proyecto a lo largo del tiempo.

Una persona que actúa como desarrolladora front-end concluyó importantes implementaciones en el desarrollo del proyecto en el cual está trabajando y necesita verificar los cambios realizados, agregarlos en su repositorio local, guardarlos y después enviar al repositorio remoto utilizando Git. Según ese contexto, ¿qué comandos de Git puede usar para ejecutar estas acciones?



Lo que aprendimos en esta aula:

    Entendimos la diferencia entre Git y Github;
    Vimos cómo descargar el proyecto completo a nuestra máquina con el git clone;
    Aprendimos cómo acceder al historial de commits de un repositorio a través del git log;
    Aprendimos a navegar en la consola a través de los comandos linux;
    Vimos algunas buenas prácticas al nombrar los archivos y de esa manera evitar problemas futuros;
    Vimos cómo utilizar el git commit en la consola;
    Aprendimos a sincronizar el proyecto con el comando git pull;
    El comando git status es súper útil y nos ayuda a entender el momento actual del proyecto;
    Aprendimos cómo agregar los archivos que queremos para el próximo commit usando git add;
    Aprendimos a enviar nuestros cambios/archivos locales con el git push;
    Vimos cómo verificar los cambios dentro de un archivo a través del git diff en la consola y en GitHub;
    Aprendimos a restaurar archivos y el proyecto, volviendo a un estado anterior a través de git restore;

En la siguiente aula:

¡GUAUUUUU! ¡Ahora vamos a aprender cómo trabajar con una nueva rama!

Aquí tienes un resumen de la clase sobre ramas y fusión en Git y GitHub:

    Hasta ahora hemos estado trabajando en una sola rama, la rama principal (main). Pero en proyectos con más personas o en empresas, es común tener múltiples ramas como ramas de desarrollo, pruebas, revisiones, etc.

    Las ramas se pueden pensar como piezas de un rompecabezas, cada una con una función específica, que luego se unen para que el software funcione.

    Para crear una nueva rama, usamos el comando git branch nombre-rama. Esto crea la nueva rama sin movernos a ella.

    Para cambiar a la nueva rama, usamos git checkout -b nombre-rama. Esto crea la rama y nos mueve a ella.

    Podemos ver las ramas existentes con git branch y cambiar entre ellas con git switch nombre-rama.

    Hicimos una modificación en un archivo en la rama "desarrollo" y la enviamos al repositorio remoto con git push origin desarrollo.

    Ahora tenemos dos ramas con contenido diferente. En el próximo video veremos cómo fusionar estas ramas.

Aquí tienes un resumen de la clase sobre ramificaciones y merge en Git y GitHub:

    El objetivo es enviar los cambios realizados en la rama "desarrollo" a la rama principal "main".
    Para hacer esto, se utiliza el comando "git merge" para fusionar las dos ramas.
    Primero se verifica el estado actual con "git log --oneline" para obtener el hash de los últimos commits.
    Luego se cambia a la rama "main" con "git switch main" y se ejecuta "git merge desarrollo" para fusionar los cambios.
    Se vuelve a verificar el log para confirmar que los cambios se han fusionado correctamente.
    Finalmente, se envían los cambios fusionados a GitHub con "git push origin main".
    Es importante siempre comprobar que la rama en la que se está trabajando está lista para ser fusionada con la rama principal.

En resumen, el merge es el proceso de integrar los cambios de una rama a otra, en este caso de "desarrollo" a "main", para mantener actualizada la rama principal.



Lo que aprendimos en esta aula:

    branch
        ¿Qué es?
        Cómo crear una nueva branch llamada ‘’desarrollo’’;
        Cómo navegar entre la branch principal ‘’main’’ y la branch “desarrollo”a través del comando git switch;
        Cómo enviar todas las modificaciones hechas en la branch “desarrollo” a la branch principal “main” con el merge.


Aquí está un resumen de la clase:

    Se aprendió que hay otra forma de iniciar un repositorio Git, además de usar el comando "git clone".
    Se creó un nuevo repositorio en GitHub y luego se inicializó un nuevo proyecto local con el comando "git init".
    Después de crear el archivo "index.html", se hizo el primer commit con "git add" y "git commit".
    Para conectar el repositorio local con el remoto en GitHub, se usó el comando "git remote add".
    Se cambió la rama principal de "master" a "main" usando el comando "git branch -M main".
    Finalmente, se envió el proyecto al repositorio remoto en GitHub usando el comando "git push -u origin main".

El objetivo principal de esta clase fue mostrar cómo iniciar un nuevo proyecto Git desde cero y conectarlo con un repositorio remoto en GitHub.

Aquí tienes un resumen de los principales temas vistos en esta clase:

    Configuración de Git: Establecimos nuestro nombre de usuario y correo electrónico con los comandos git config --global user.name y git config --global user.email.

    Creación de repositorios: Aprendimos a crear un nuevo repositorio local con git init y a clonar un repositorio remoto con git clone.

    Verificación del estado: Utilizamos git status para ver el estado actual de nuestro proyecto, git log para ver el historial de commits y git diff para ver los cambios en los archivos.

    Agregar archivos: Usamos git add . para agregar todos los archivos modificados o git add <archivo> para agregar un archivo específico.

    Realizar commits: Empleamos git commit -m "mensaje" para crear un nuevo commit con un mensaje descriptivo.

    Trabajar con ramas: Aprendimos a crear una nueva rama con git checkout -b <nombre-rama>, cambiar entre ramas con git switch <nombre-rama> y mezclar ramas con git merge <nombre-rama>.

    Deshacer cambios: Utilizamos git restore --source <hash-commit> <archivo> para volver a un estado anterior de un archivo.

    Subir y bajar cambios: Usamos git push para enviar nuestros commits a un repositorio remoto y git pull para traer las actualizaciones del repositorio remoto.


Lo que aprendimos en esta aula:

    git init
        Aprendimos una otra manera de crear nuestro repositorio;
        Hicimos un recorrido de todo lo visto durante el curso.

Para reforzar el contenido y seguir aprendiendo, tenemos algunos contenidos de apoyo.

En estos artículos de Luzdalis López, además del paso a paso, hay algunos contenidos extras para profundizar aún más en el tema:

https://www.aluracursos.com/blog/iniciando-repositorio-con-git

https://www.aluracursos.com/blog/creando-repositorio-remoto-en-github?utm_source=gnarus&utm_medium=timeline

https://www.aluracursos.com/blog/clonando-un-repositorio-remoto?utm_source=gnarus&utm_medium=timeline



¡Es el momento de celebrar tu gran logro!

En este entrenamiento, se superaron todas las barreras y te sumergiste por primera vez en Git y Github.

Aprendiste lo que és y cómo usar el Github de una forma práctica a través de commits y hasta invitaste una persona a participar de tu proyecto. Vimos la diferencia entre Git y Github y aprendimos los principales comandos, como clone, pull, commit, restore, branch y merge.

    Ahora, califica el curso, obtén tu certificado y celebra mucho este logro.

“Hablar es fácil, muéstrame el código.” (Linus Torvalds)

¡Felicitaciones!


