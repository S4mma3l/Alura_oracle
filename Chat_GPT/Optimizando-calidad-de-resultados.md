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

En esta lección, el instructor Christian Velasco muestra cómo utilizar el ChatGPT para resumir textos en diferentes idiomas, respetando el idioma original. Primero, prueba con un texto en alemán, pero el resumen inicial se genera en español. Para forzar que el resumen se genere en el idioma original, el instructor ajusta el prompt, indicando que respete el idioma del texto. Luego, prueba con un texto en francés y logra que el resumen se genere en ese idioma. El instructor explica que esta técnica es muy útil para automatizar procesos de traducción o resumen de textos, ya que permite controlar el formato de salida y el idioma del resultado.