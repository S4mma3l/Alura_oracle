// #1
let listaGenerica = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// #2
let lenguaguesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


// #3
let nuevosLenguajes = lenguaguesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// #4
console.log(lenguaguesDeProgramacion);
alert(lenguaguesDeProgramacion);

// #5

reversed = lenguaguesDeProgramacion.reverse();
console.log(reversed);
alert(reversed);

// #6

function calcularPromedio(listaGenerica) {
  /**
   * Calcula el promedio de los elementos en una lista de números.
   *
   * Args:
   *   lista: Una lista de números.
   *
   * Returns:
   *   El promedio de los elementos en la lista.
   */
  if (listaGenerica.length === 0) {
    return 0;
  }
  let suma = 0;
  for (let i = 0; i < listaGenerica.length; i++) {
    suma += listaGenerica[i];
  }
  return suma / listaGenerica.length;
}

alert(calcularPromedio(listaGenerica));

// #7

function mostrarMaxMin(listaGenerica) {
  /**
   * Muestra en la consola el número más grande y el número más pequeño en una lista.
   *
   * Args:
   *   lista: Una lista de números.
   */
  if (listaGenerica.length === 0) {
    console.log("La lista está vacía.");
    return;
  }
  let maximo = Math.max(...listaGenerica);
  let minimo = Math.min(...listaGenerica);
  console.log(`Número más grande: ${maximo}`);
  console.log(`Número más pequeño: ${minimo}`);
}
console.log(mostrarMaxMin(listaGenerica));

// #8

function sumarElementos(listaGenerica) {
  /**
   * Devuelve la suma de todos los elementos en una lista.
   *
   * Args:
   *   lista: Una lista de números.
   *
   * Returns:
   *   La suma de todos los elementos en la lista.
   */
  let suma = 0;
  for (let i = 0; i < listaGenerica.length; i++) {
    suma += listaGenerica[i];
  }
  return suma;
}

alert(sumarElementos(listaGenerica));

// #9

function encontrarPosicion(listaGenerica, elemento) {
  /**
   * Devuelve la posición en la lista donde se encuentra un elemento pasado como parámetro, 
   * o -1 si no existe en la lista.
   *
   * Args:
   *   lista: Una lista de números.
   *   elemento: El elemento a buscar en la lista.
   *
   * Returns:
   *   La posición del elemento en la lista, o -1 si no existe.
   */
  for (let i = 0; i < listaGenerica.length; i++) {
    if (listaGenerica[i] === elemento) {
      return i;
    }
  }
  return -1;
}
alert(encontrarPosicion(listaGenerica, 5));

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];

// #10

function sumarListas(lista1, lista2) {
  /**
   * Recibe dos listas de números del mismo tamaño y devuelve una nueva lista con la suma de los elementos uno a uno.
   *
   * Args:
   *   lista1: La primera lista de números.
   *   lista2: La segunda lista de números.
   *
   * Returns:
   *   Una nueva lista con la suma de los elementos uno a uno.
   */
  if (lista1.length !== lista2.length) {
    throw new Error("Las listas deben tener el mismo tamaño.");
  }
  let resultado = [];
  for (let i = 0; i < lista1.length; i++) {
    resultado.push(lista1[i] + lista2[i]);
  }
  return resultado;
}

alert(sumarListas(lista1, lista2));

// #11

function calcularCuadrados(listaGenerica) {
  /**
   * Recibe una lista de números y devuelve una nueva lista con el cuadrado de cada número.
   *
   * Args:
   *   lista: Una lista de números.
   *
   * Returns:
   *   Una nueva lista con el cuadrado de cada número.
   */
  let resultado = [];
  for (let i = 0; i < listaGenerica.length; i++) {
    resultado.push(listaGenerica[i] ** 2);
  }
  return resultado;
}

alert(calcularCuadrados(listaGenerica));