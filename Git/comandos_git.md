git config --global user.name "usuario"
git config --global user.email "usuario@correo.com"

git config --list

// copiar un repositorio

git clone url del proyecto

ver historial del proyecto

git log

git log --oneline

### Para saber mas: Git Clone

Imagina que estás trabajando en un proyecto que ya está configurado en un repositorio de origen, y deseas colaborar con este proyecto. Con git clone, es posible crear una copia de desarrollo en un repositorio local, y todos los cambios que realices van a ser gestionados a partir de este repositorio. El comando git clone es usado para seleccionar un repositorio existente y crear un clon o una copia de él en un repositorio local.

El comando git clone crea una copia de un repositorio git existente, y este repositorio puede ser local o remoto. Además, esta copia es un repositorio git completo, con tu propio historial, gestionamiento de tus propios archivos y es un ambiente aislado como un todo del repositorio original.

Por comodidad, la clonación crea una conexión remota que apunta al repositorio original. Y es esta conexión la que facilita mucho la interacción con el repositorio central. Puedes consultar un ejemplo demostrando el git clone aquí.

Con el git clone también puedes clonar el repositorio para una carpeta específica:

git clone <repositorio> <mi-proyecto-clone>

El repositorio localizado en repositorio es clonado para una carpeta llamada:

mi-proyecto-clone

También puedes configurar el git clone y clonar el repositorio desde una branch específica, diferente a la original, de esta manera:

git clone -branch new_feature <repositorio>

En el ejemplo anterior se clonaria solamente la branch new feature de repositorio. Otras configuraciones de opciones de git clone

### Para saber mas: Git Log

Si deseas verificar el historial de cambios, los mensajes de commit, el nombre de la persona autora del commit y otras informaciones sobre el proyecto, hay un comando de git que te puede ayudar. Este comando es git log.

Como ya sabemos, los commits poseen hashs que los identifican de una manera única, es decir, no existen dos commits con el mismo hash. Con git log podemos ver el hash y muchas otras informaciones del commit.

Podemos visualizar todos los commits, uno en cada línea con el comando:

git log –oneline

Si, en lugar de menos informaciones, queremos ver más, como las alteraciones del commit, podemos usar:

git log -p

También podemos buscar las informaciones de la persona autora del commit con el comando:

git log --author="user_name"

Y buscar informaciones por fecha:

git log --since=1.month.ago --until=1.day.ago

En el comando anterior, estamos buscando las informaciones del commit desde hace un mes hasta hace un día.

Tu también puedes formatear la visualización de las informaciones del commit con el comando:

git log --pretty="format:%h %s"

Esto trae el hash seguido del mensaje de commit. Para saber más formas de mostrar las informaciones del commit, aquí hay una lista de formas en que puedes hacer.

Genial, ¿no? ¿Qué pasaría si te dijeras que hay muchos otros parámetros que podemos pasar en git log? Si deseas saber más sobre cómo mostrar tu información de commit

### Git status, add, commit y push

git pull // para actualizar el repositorio

git status // saber el estado de proyecto

git add // para agregar un achivo se cocloca el nombre o un punto si hay mas

git commit -m "comentario" // comando apara hacer un commit desde la consola

git push  // para enviar los cambios

git diff // funciona para ver los cambios en el archivo

git restore // para restaurar a una version

git branch // para ver las ramas

git checkout -b 'rama nueva' // crea la nueva rama

git switch rama // con este cambiamos a la ramas creadas


git push origin rama // en caso de error

git merge rama //une las ramas que tengamos

git push origin main

git init // comando para iniciar un repositorio
git remote add origin url de nuestro proyecto //conecta con el proyecto creado en github
git branch -M main // cambiamos la rama master a main
git push -u origin main  // realizamos la carga de archivos a el proyecto
