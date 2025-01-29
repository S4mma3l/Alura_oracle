### Para saber más: entendiendo qué son los tokens


Ya has notado que diseñar tu comando es esencialmente como "programar" el modelo, generalmente proporcionando algunas instrucciones o ejemplos. Pero, ¿cómo funciona este modelo? ¿Cómo sabe qué responder?

Los modelos comprenden y procesan el texto dividiéndolo en tokens. Un token puede ser una palabra individual, un carácter o incluso una parte de una palabra. Por ejemplo, la frase "Hello World!" tendría los siguientes tokens:

Tenemos 3 tokens:

    Hello,
    world;
    y un token para el signo de exclamación.

Mientras tanto, la misma frase en español se dividiría de la siguiente manera:

En este caso, tenemos 4 tokens:

    ¡,
    Hola,
    mundo,
    !, o sea , dos token para el signo de exclamación

Con esto, se puede ver que dependiendo del idioma, el proceso de tokenización divide las palabras de manera diferente.

Si tienes curiosidad por ver cómo un texto se traduce en tokens, hay una herramienta de OpenAI llamada tokenizer.

El modelo de ChatGPT asigna un valor de representación a cada token, capturando información contextual y semántica. Esta información semántica se refiere al significado e interpretación de las palabras, frases o sentencias en un contexto específico.

La semántica está relacionada con el estudio del significado de las palabras y cómo se combinan para formar ideas y expresiones más complejas.

En el contexto del procesamiento del lenguaje natural, la información semántica se utiliza para capturar el significado y la intención subyacentes a una secuencia de palabras. Al entender la información semántica, un modelo de lenguaje como ChatGPT puede inferir el contexto y responder de manera más precisa.

Entonces, los tokens de entrada se pasan secuencialmente por el modelo, permitiéndole analizar el contexto anterior para hacer predicciones sobre el próximo token.

Es importante mencionar que el número de tokens de entrada está limitado para garantizar el buen rendimiento del modelo y controlar los costos computacionales. Si un comando excede el límite de tokens permitido, será necesario reducirlo o dividirlo en partes para ajustarse al límite.


### Para saber más: ChatGPT 3.5 vs ChatGPT 4 - ¿Cuál es la diferencia?

En los videos anteriores, probamos algunos comandos en dos versiones de ChatGPT: la versión 3.5 y la 4.

Fue posible notar que los resultados son diferentes para cada una de las versiones y que las respuestas generadas por la versión 4 son más lentas en comparación con la versión anterior. Dado que la versión 4 es más compleja que su versión anterior, el tiempo de respuesta para generar las respuestas puede ser significativamente mayor. Esto significa que, aunque las respuestas generadas por la versión 4 son más precisas y relevantes, pueden tardar más en generarse que las respuestas de la versión 3.5.

¿Y cuál es la diferencia entre las versiones? ¿Qué cambió en la versión 4?

Según OpenAI, el GPT-4, lanzado en marzo de 2023, es el sistema más avanzado de OpenAI hasta el momento, produciendo respuestas más seguras y útiles. Sin embargo, esta versión hasta el momento solo está disponible en la opción de suscripción mensual llamada Plus.

Además de las respuestas más seguras, la empresa afirma que el GPT-4 es más creativo y colaborativo que nunca. Puede generar, editar e interactuar con los usuarios en tareas de redacción creativa y técnica, como componer música, escribir guiones o aprender el estilo de escritura de un usuario.

Además, el GPT-4 es un gran modelo multimodal (aceptando entradas de imagen y texto, emitiendo salidas de texto) que, aunque es menos capaz que los humanos en muchos escenarios del mundo real, muestra un rendimiento de nivel humano en varios benchmarks profesionales y académicos.

Es importante mencionar que OpenAI dedicó seis meses para mejorar la seguridad y alineación del GPT-4, según lo informado por la propia empresa. Las evaluaciones internas de la empresa muestran que el GPT-4 tiene un 82% menos de probabilidad de responder a solicitudes de contenido prohibido y un 40% más de posibilidades de producir respuestas correctas que el GPT-3.5.

A pesar de sus capacidades, el GPT-4 tiene limitaciones similares a los modelos GPT anteriores. Más importante aún, aún no es totalmente confiable (alucina hechos y comete errores de razonamiento). Sin embargo, aunque sigue siendo un problema real, el GPT-4 reduce significativamente las alucinaciones en comparación con los modelos anteriores. Las alucinaciones, en este contexto, se refieren a la generación de respuestas que parecen ser verdaderas, pero que pueden ser falsas o tener poca confiabilidad.

En la siguiente figura, tenemos la precisión de ChatGPT en nueve categorías:

    aprendizaje
    tecnología
    escritura
    historia
    matemáticas
    ciencias
    recomendación
    código
    negocios

El GPT-4 (en verde) se comparó con las tres primeras versiones de ChatGPT, mostrando que hay ganancias significativas en todos los temas.

El modelo básico GPT-4, al igual que los modelos anteriores de la serie GPT, fue creado para prever la siguiente palabra en un documento y se entrenó en base a datos disponibles públicamente, así como datos con licencia de OpenAI. Estos datos de entrenamiento incluyen varias soluciones correctas e incorrectas para problemas matemáticos, razonamientos débiles y fuertes, afirmaciones autocontradictorias y consistentes, representando una amplia variedad de ideologías e ideas.

Es importante destacar que cuando un usuario hace una pregunta, el modelo básico puede proporcionar varias respuestas que pueden estar un poco alejadas de la intención original del usuario. Sin embargo, la versión 4 de ChatGPT presenta respuestas más precisas y relevantes que la versión 3.5, aunque puede tener un tiempo de respuesta más lento debido a su mayor complejidad.

Si deseas profundizar más en el tema, visita las siguientes páginas:

https://arxiv.org/abs/2303.08774

https://arxiv.org/abs/2303.08774



En esta clase, has aprendido a:

    Crear prompts de instrucción;
    Crear e identificar qué son prompts de conclusión;
    Crear prompts de explicación.

La clase se enfoca en mejorar la confiabilidad de los resultados obtenidos de ChatGPT, aprendiendo a dar instrucciones más claras y detalladas en el prompt.

El punto de partida es un prompt inicial que pide generar una campaña. Sin embargo, el objetivo es obtener 3 alternativas de campaña en lugar de solo una.

Para lograr esto, el instructor va refinando el prompt paso a paso:

    Primero, agrega la instrucción "Sugiero tres alternativas de campaña" antes de pedir el resultado en formato de código de JavaScript.
    Luego, especifica que cada alternativa debe estar en un bloque de código separado.
    También pide que no se generen los console.log para imprimir los resultados, sino solo el código en el formato establecido.

Después de varios intentos y ajustes, el prompt final queda así:

"Sugiero tres alternativas de campaña. Devuelvo el resultado en formato de código de programación de JavaScript. Cada alternativa en un bloque de código. No generar los console.log para imprimir los resultados. Generar únicamente el código en formato establecido."

Con este prompt detallado, ChatGPT logra generar las 3 alternativas de campaña en bloques de código separados, sin los console.log, tal como se solicitó.

El aprendizaje clave es que, para obtener resultados confiables y reproducibles de ChatGPT, es necesario estructurar los prompts de manera muy precisa y desglosar los problemas complejos en pasos más simples y específicos.

### Para saber más: buenas prácticas en la redacción de prompts


Existen algunas sugerencias de buenas prácticas que pueden ayudarte a mejorar la redacción de los comandos para ChatGPT. Aquí tienes algunas de ellas:

    Utiliza delimitadores para indicar claramente partes distintas del comando:

Los delimitadores pueden ayudar a escribir mejores comandos en ChatGPT, ya que proporcionan una estructura clara para que el modelo comprenda lo que se está solicitando y genere respuestas más precisas y relevantes.

Los siguientes delimitadores se utilizan comúnmente:

1 - """ (tres comillas dobles): El uso de tres comillas dobles es común en varios lenguajes de programación y sirve para indicar un texto que no debe ser procesado o interpretado. En ChatGPT, esto se puede usar para separar el texto de la instrucción. Esto ayuda a clarificar la intención de la pregunta o tema para el modelo, facilitando la generación de una respuesta.

Ejemplo:

    Dale un título al siguiente texto:

    Texto:

    """Python es un lenguaje de propósito general de alto nivel, multiparadigma, compatible con los paradigmas orientado a objetos, imperativo, funcional y procedural. Tiene tipado dinámico y una de sus principales características es permitir la fácil lectura del código y requerir pocas líneas en comparación con el mismo programa en otros lenguajes."""

    Título:

2 - ``` Tres acentos graves: Los tres acentos graves se utilizan para indicar que el contenido entre ellos se trata como un bloque de código.

Ejemplo:

Explica el código a continuación:

for i in range(5):
   print(i)

3 - _____ (guiones bajos): Los guiones bajos se pueden utilizar para generar un resultado en formato de formulario. Esto es interesante si deseas automatizar el resultado de un comando y no deseas que el resultado sea en código, solo en texto.

A continuación, tienes un comando que utiliza este recurso:

Estoy lanzando una campaña de Día de las Madres de un kit de belleza. El video en YouTube necesita un título, descripción, idea de miniatura y texto de miniatura. Sugiere la duración en minutos y en qué canales puedo hacer colaboraciones para promocionar la campaña. Describe también sus puntos fuertes. Devuelve el resultado en el siguiente formato:

Título: _____
Descripción: _____
Idea de miniatura: _____
Texto de miniatura: _____
Duración: _____
Canales: , ,
Puntos fuertes: __,__,__

    Utiliza acentos y caracteres especiales:

Si escribes los comandos en español, es interesante usar acentos o caracteres especiales. Esto puede ayudar al modelo a comprender mejor lo que estás solicitando.

    Utiliza signos de puntuación:

Es recomendable usar signos de puntuación: comas, interrogaciones y puntos finales, para separar las cláusulas y hacer que el comando sea más fácil de leer y entender.

Por ejemplo, "¿Cuál es la diferencia entre los lenguajes Python y R?" es más fácil de entender qué "¿Cuál es la diferencia entre los lenguajes Python y R".

    Utiliza comillas:

Utiliza comillas para citar fragmentos de texto relevantes en tu comando, especialmente si estás haciendo una pregunta basada en una cita de un texto. Por ejemplo:

¿Sobre qué trata el libro "Storytelling con Datos" de la autora Cole Nussbaumer Knaflic?

    Ten claridad y especificidad: Al redactar un comando, es importante ser claro(a) y específico(a) sobre lo que deseas que ChatGPT haga. Esto ayuda al modelo a entender exactamente lo que estás solicitando y a generar una respuesta más precisa. Por lo tanto, es importante evitar el uso de términos vagos o ambiguos que puedan confundir al modelo.

Por ejemplo, en lugar de escribir "Dame información sobre Python", intenta escribir "¿Cómo es la sintaxis del lenguaje de programación Python?".

    Proporciona contexto:

Proporcionar información adicional o contexto relevante para ChatGPT puede ayudar al modelo a entender mejor la pregunta y generar una respuesta más precisa. Si estás haciendo una pregunta sobre un tema específico, puedes proporcionar algunos detalles básicos sobre ese tema en el comando.

Por ejemplo, si estás haciendo una pregunta sobre un error en un código Python, proporciona algunos detalles básicos sobre qué es ese código.

    Evita preguntas complejas:

Evita hacer preguntas complejas o que requieran respuestas detalladas. ChatGPT funciona mejor cuando recibe preguntas simples y directas. Por lo tanto, trata de dividir preguntas complejas en preguntas más pequeñas y simples.

Recuerda que estas son solo algunas sugerencias y que la redacción de los comandos puede variar según el contexto de la pregunta. ¡Intenta usar estas sugerencias como una guía general para mejorar la calidad de tus interacciones con ChatGPT!

### Sintetizando textos en el idioma correcto

Idioma del texto: Español
Resumen de la clase en español:

En esta lección, el instructor Christian Velasco muestra cómo utilizar el ChatGPT para resumir textos en diferentes idiomas, respetando el idioma original. Primero, prueba con un texto en alemán, pero el resumen inicial se genera en español. Para forzar que el resumen se genere en el idioma original, el instructor ajusta el prompt, 
indicando que respete el idioma del texto. Luego, prueba con un texto en francés y logra que el resumen se genere en ese idioma. El instructor explica que esta técnica es muy útil para automatizar procesos de traducción o resumen de textos, ya que permite controlar el formato de salida y el idioma del resultado.

ejemplo de prompt

primera orden que va a estar en ###.

###
 texto
###

formato de salida ( en codigo JavaScript)
```
idioma_texto: XXX
Resumen_en_espanol:
palabras_claves = []
```

Aquí tienes un resumen de la clase:

Idioma del texto: español
Resumen: En esta clase, el instructor muestra cómo utilizar ChatGPT para analizar y sintetizar reseñas de productos. Primero, extrae una reseña de 3 estrellas de Amazon sobre un producto Alexa y le pide a ChatGPT que la resuma en 30 palabras. Luego, ajusta el formato de salida para que el resumen se genere en español. Finalmente, le pide a ChatGPT que extraiga las palabras clave de la reseña en formato de código JavaScript. El instructor practica este proceso con una segunda reseña para demostrar la reproducibilidad del método.

Palabras clave: dispositivos Alexa, problemas de red, fallas, reconocimiento de voz, integración, diseño.

### Creando prompts para analizar sentimientos

Claro, aquí está el detalle del prompt empleado en esta clase:

El prompt utilizado por el instructor en esta clase es el siguiente:

"Identifica el sentimiento de la siguiente reseña de producto.

Formato de salida:
Idioma del texto: <idioma>
Sentimiento en una palabra: <positivo/negativo/neutro>
Resumen en 20 palabras: <resumen de la reseña en 20 palabras o menos>

<texto de la reseña>
###"

Veamos los pasos que siguió el instructor:

    Primero, usó un prompt más simple: "Identifica el sentimiento de la siguiente reseña de producto".
    Luego, refinó el prompt para obtener una respuesta más estructurada, solicitando que la salida tenga el formato:
        Idioma del texto
        Sentimiento en una sola palabra (positivo/negativo/neutro)
        Resumen de la reseña en 20 palabras o menos
    El texto de la reseña a analizar se coloca entre las etiquetas "###".

Este prompt le permite a ChatGPT proporcionar una clasificación clara del sentimiento, junto con un breve resumen del contenido de la reseña, lo cual es muy útil para analizar rápidamente un gran número de comentarios.

El instructor menciona que este tipo de análisis automatizado puede ser muy valioso para empresas, al permitirles entender la percepción de los clientes sobre sus productos o servicios de manera eficiente.

### Para saber más: Prompts - Diversas aplicaciones

Podemos escribir prompts para diversos fines, tanto para nuestra vida diaria como en el entorno laboral. En los videos anteriores, utilizamos prompts para resúmenes de textos, traducciones e incluso para analizar los sentimientos de personas que compraron un producto. ¿Vamos a explorar algunas posibilidades más?
Transformando el tono de voz

Vanessa es una influencer digital que comparte consejos de maquillaje y productos de belleza en sus redes sociales. Recientemente, publicó un análisis crítico sobre un nuevo lanzamiento de una marca famosa de cosméticos, resaltando algunos aspectos negativos del producto. Sin embargo, se dio cuenta de que su tono de voz inicial podría haber sido un poco duro. Se le ocurrió la idea de volver a escribir su texto con ChatGPT, utilizando un tono más amigable y objetivo, para transmitir su opinión de manera equilibrada y respetuosa a sus seguidores.

¿Intentemos escribir un prompt con ese propósito?

Vuelva a escribir el texto a continuación, delimitado por " " ", dejando su tono de voz más simpático y amigable:

Texto: " " " Probé el nuevo lanzamiento de la marca XYZ y, siendo sincera, me decepcionó mucho. La calidad del producto es simplemente terrible. El empaque es frágil y se rompió después del primer uso, además, la pigmentación de las sombras es débil y la durabilidad es prácticamente inexistente. No entiendo cómo una marca de renombre puede lanzar algo tan malo al mercado. ¡No lo recomendaría en absoluto! " " "

Como resultado, obtenemos el nuevo texto:

"Tuve la oportunidad de probar el último lanzamiento de la marca XYZ y, para ser sincera, me decepcionó un poco. Me sorprendió la calidad del producto, que no cumplió con mis expectativas. El empaque resultó ser un poco frágil, lamentablemente se rompió después del primer uso. Además, noté que la pigmentación de las sombras no es tan intensa como me gustaría, y la durabilidad también dejó un poco que desear. Confieso que me quedé un tanto perpleja, ya que esperaba más de esta marca de renombre. En fin, mi opinión es que tal vez este producto no sea la mejor inversión, así que no lo recomendaría con mucha énfasis."

¡Observa cómo de esta manera el texto es menos duro y agresivo! Usar ChatGPT para cambiar el tono de voz de un texto puede ser interesante por varias razones. Aquí hay algunas de ellas:

Versatilidad: ChatGPT es capaz de generar texto en diferentes estilos y tonos de voz. Puede transformar un texto formal en un texto más casual, o viceversa. Esto permite adaptar el contenido para diferentes audiencias o situaciones, haciéndolo más atractivo y adecuado para el propósito deseado.

Personalización: Con ChatGPT, es posible personalizar el tono de voz para adaptarse al estilo de una marca, empresa o individuo específico. Esto es especialmente útil en áreas como marketing y publicidad, donde la consistencia de la voz de la marca es crucial para construir una identidad sólida.

Adaptación a diferentes plataformas: Cada plataforma o canal de comunicación tiene sus propias peculiaridades y expectativas con respecto al tono de voz. ChatGPT puede ayudar a adaptar el contenido para diferentes plataformas, como redes sociales, blogs, correos electrónicos, entre otros, para que se alinee con el lenguaje y el estilo apropiados.

Creatividad y entretenimiento: Cambiar el tono de voz de un texto puede ser una forma de estimular la creatividad y crear contenido divertido y original. Se pueden probar diferentes estilos narrativos, haciendo que las historias sean más cautivadoras y atractivas.

Accesibilidad: El uso de ChatGPT para cambiar el tono de voz de un texto también puede beneficiar a la accesibilidad. Por ejemplo, ChatGPT puede ayudar a adaptar el tono para mejorar la descripción textual para que las personas ciegas puedan comprender con más detalle el contenido.
Convirtiendo formatos

Allan, un analista de datos, recibió un conjunto de información en formato de diccionario Python. Sin embargo, necesita convertir estos datos al formato CSV (valores separados por comas) para poder importarlos a Google Sheets y realizar análisis más avanzados. Ha decidido utilizar ChatGPT para ayudar en la tarea de conversión.

¿Cómo podríamos redactar un indicador para esto? Es importante contextualizar a ChatGPT, indicando que tenemos algunos datos almacenados en un diccionario Python, y también es bueno mencionar el nombre de ese diccionario. Después de eso, podemos pedirle que escriba los datos en el formato deseado y que devuelva solo los datos en ese formato.

El indicador sigue una secuencia lógica de información, comenzando con la contextualización, pasando por la descripción del problema y finalizando con la solicitud específica al modelo.

    '001': {
        'nombre': 'João',
        'edad': 30,
        'cargo': 'Gerente',
        'salario': 5000.00
    },
    '002': {
        'nombre': 'Maria',
        'edad': 25,
        'cargo': 'Analista',
        'salario': 3500.00
    },
    '003': {
        'nombre': 'Pedro',
        'edad': 28,
        'cargo': 'Desarrollador',
        'salario': 4000.00
    }
}

###  Trabajando textos grandes

Muy bien, voy a explicar el contenido de la clase utilizando algunas analogías para que sea más fácil de entender:

    Los tokens se pueden comparar a las piezas de un rompecabezas. Así como un rompecabezas se compone de múltiples piezas, las palabras se dividen en tokens, que son las unidades más pequeñas que el ChatGPT puede procesar.

    El límite de 4,096 tokens se puede comparar a la capacidad de una caja. Así como una caja tiene un espacio limitado, el ChatGPT tiene un límite en la cantidad de tokens que puede procesar por solicitud.

    Dividir el texto en dos partes es como cortar un pastel en dos mitades. De esta manera, se puede procesar cada parte por separado, sin exceder la capacidad de la "caja" (el límite de tokens).

    Resumir el texto en bloques de 100 palabras es como servir porciones del pastel. En lugar de intentar comer todo el pastel de una vez, se divide en porciones más manejables.

    Consolidar los resúmenes parciales en uno solo es como volver a juntar las dos mitades del pastel. Así se obtiene un resumen completo del texto original.

Aquí tienes un resumen de la clase sobre el Playground de OpenAI:

    El Playground es una herramienta que permite automatizar procesos utilizando las APIs de ChatGPT, más allá de la interfaz de usuario.
    En el Playground, puedes separar el prompt (instrucciones) del texto de entrada, lo que permite mayor flexibilidad para automatizar tareas.
    Puedes probar diferentes configuraciones como el modelo, la temperatura (creatividad) y la longitud máxima de la respuesta.
    Es importante entender cómo funciona el Playground para poder utilizarlo de manera efectiva en la automatización de procesos en tu empresa, como la generación de contenido, resumen de textos, traducción, etc.
    El uso del Playground requiere tener una cuenta paga o créditos de la cuenta gratuita, ya que el acceso a las APIs tiene un costo.

En resumen, el Playground es una herramienta poderosa para integrar la inteligencia artificial de ChatGPT en los procesos automatizados de tu empresa, pero requiere un cierto nivel de conocimiento técnico para configurarlo adecuadamente.

Conociendo el Playground

OpenAI Platform es una plataforma en línea desarrollada por OpenAI que permite a los usuarios experimentar y explorar los modelos de lenguaje de OpenAI de manera interactiva. Es un entorno donde puedes interactuar con el modelo de lenguaje, hacer preguntas y recibir respuestas generadas por el modelo en tiempo real.

Esa plataforma está dirigida a desarrolladores, científicos de datos, empresas y profesionales de IA que deseen aprovechar los recursos avanzados. Para acceder, es necesario iniciar sesión en la página de OpenAI platform.

La plataforma abarca varios productos y herramientas creados por OpenAI para ayudar en la creación e implementación de aplicaciones basadas en inteligencia artificial.

Aquí hablaremos sobre uno de estos recursos disponibles: el Playground. Para acceder, simplemente haz clic en el botón 'Playground' en la parte superior de la página.

Pantalla de inicio del sitio "platform.openai.com" con la opción de menú superior "Playground".

Después de hacer clic en Playground, accederemos a la página que se muestra en la figura siguiente. Con la opción “Mode” (Modo) siendo 'Chat', en el lado izquierdo hay un cuadro llamado “System” con el mensaje “You are a helpful assistent” (Eres un asistente útil) .

En el centro de la pantalla se encuentra “User” con el mensaje “Enter a user message here” ('Ingresa un mensaje de usuario aquí') y un botón con signo positivo (+) para agregar un mensaje.

En la parte inferior hay un botón “Submit” (Enviar) en verde. Por último, en el lado derecho, hay varias opciones de configuración.

Pantalla de inicio del sitio "platform.openai.com" completa, con la parte de 'System', 'User' y más configuraciones en el lado derecho. En la interfaz de OpenAI Playground, en el modo 'Chat' (charla), existe la opción de escribir un prompt en el campo "System" (Sistema). Esta es una forma de separar y especificar las tareas que deseas que el modelo de lenguaje realice.

El campo "User"(Usuario) es donde puedes ingresar el texto a trabajar o incluso código, permitiéndote separar el contenido en caso de que tu instrucción y tu texto sean largos. Esta separación facilita la comprensión del modelo y ayuda a obtener resultados más precisos.

Es posible elegir qué modelo queremos utilizar en la configuración "Model" (modelo). Para quienes no son suscriptores de ChatGPT versión Plus, solo estará disponible el modelo 3.5.

Además, hay algunas configuraciones disponibles en Playground que discutiremos en breve: Temperature (Temperatura), Maximum lenght (Longitud máxima), Top P, Frequency penalty (Penalización de frecuencia) y Presence penalty (Penalización de presencia).

Con estos recursos, Playground permite a los usuarios introducir indicaciones de texto, modificar parámetros y observar las respuestas del modelo, convirtiéndolo en un excelente entorno para trabajar, obtener respuestas optimizadas y generar automatizaciones.

    Es importante destacar que, en principio, Playground es gratuito, pero tiene un límite de tiempo de aproximadamente 3 a 4 meses. Al registrarte en una cuenta en OpenAI, recibes automáticamente un crédito inicial de $18, lo que permite generar alrededor de 650,000 palabras.

    Sin embargo, una vez que se alcance el límite de tiempo o se agoten los créditos, no podrás enviar mensajes a menos que pagues por utilizar el servicio.

Ajustando las configuraciones

En Playground, puedes controlar los resultados de los prompts ajustando algunas configuraciones que no podemos controlar solo con ChatGPT. ¿Has experimentado el problema de obtener resultados diferentes cada vez que ejecutas un prompt? Existe una configuración que puede resolver este problema, y se llama temperatura.

Cuando configuramos la temperatura en 0 en Playground, el modelo siempre devolverá conclusiones idénticas o muy similares. Por otro lado, si aumentas la temperatura, los resultados no serán tan similares. Por ello, cuando la temperatura es superior a 0, enviar el mismo prompt produce conclusiones diferentes cada vez.

¿Y por qué ocurre esto? El modelo predice qué texto tiene una mayor probabilidad de seguir al texto que lo precede, y la temperatura es un valor entre 0 y 2 que básicamente permite controlar la confianza del modelo al hacer estas predicciones.

La reducción de la temperatura significa que habrá menos riesgos y las conclusiones serán más precisas y determinísticas. Por otro lado, el aumento de la temperatura resultará en conclusiones más diversas.

Además de la temperatura, podemos modificar otros parámetros. El 'Maximum Length' define la longitud máxima que una respuesta puede tener. Si estableces un límite numérico, el modelo detendrá la generación de texto una vez que alcance ese límite de caracteres.

Esto es útil para controlar la extensión de las respuestas generadas y evitar resultados excesivamente largos.

En cuanto al 'Top P', también conocido como Muestreo de Núcleo, es una técnica que controla la diversidad de las respuestas considerando solo las probabilidades de las palabras más probables.

Al establecer un valor para el 'Top P', como 1, por ejemplo, el modelo selecciona las palabras más probables hasta alcanzar una probabilidad acumulada del 100%. Esto evita que el modelo genere respuestas muy raras o improbables.

También contamos con la 'Penalización de Frecuencia', una configuración que controla la repetición de tokens en una respuesta. Establecer un valor más alto para la penalización de frecuencia anima al modelo a evitar repeticiones excesivas y producir respuestas más variadas.

Por último, el Presence Penalty (Penalización de Presencia) es la configuración que controla la preferencia del modelo por incluir o evitar información específica en las respuestas. Cuando aumentas el valor de la Penalización de Presencia, el modelo tiende más a evitar mencionar palabras o frases que hayas proporcionado como instrucción (prompt).

Esto significa que el modelo intentará generar respuestas que no incluyan explícitamente la información proporcionada. Por otro lado, al disminuir el valor del Presence Penalty o establecerlo en cero, el modelo tendrá más libertad para incluir la información proporcionada en las respuestas.

Esto puede resultar en respuestas más directas y que mencionen explícitamente lo que solicitaste.

La configuración de la Presence Penalty puede ser útil cuando deseas que el modelo genere respuestas más creativas, evitando depender excesivamente de la información proporcionada.

Sin embargo, es importante observar que, en algunos casos, especialmente cuando las instrucciones son más largas o complejas, un valor alto de Penalización de Presencia puede hacer que el modelo ignore por completo la información proporcionada.

Estas configuraciones permiten personalizar el comportamiento del modelo de lenguaje según tus necesidades y ajustar el equilibrio entre creatividad, coherencia, longitud de las respuestas y otras características deseadas.

Es importante destacar que OpenAI Platform es un conjunto de servicios y herramientas en constante evolución, por lo que nuevos recursos y productos pueden añadirse a la plataforma con el tiempo.

Por ello, es recomendable consultar el sitio web de OpenAI o la documentación oficial para obtener información actualizada sobre los recursos disponibles en OpenAI Platform.

¡Siéntete libre de explorar todo lo que la plataforma tiene para ofrecer!

Para obtener más información sobre la plataforma, puedes visitar la página:
https://platform.openai.com/docs/introduction



En esta clase, aprendiste a:

    Dividir un texto extenso en partes más pequeñas y manejables;
    Desarrollar y aplicar estrategias para resumir textos largos;
    Conocer y utilizar OpenAI Playground para separar las instrucciones en 'system' y la parte textual en 'message'.

