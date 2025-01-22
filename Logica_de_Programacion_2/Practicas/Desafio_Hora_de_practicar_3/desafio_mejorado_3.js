// ... (tus funciones de JavaScript: calcularIMC, calcularFactorial, etc.) ...

function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").textContent = "Su IMC es: " + imc;
  }
  
  function calcularFactorial() {
    let numero = parseInt(document.getElementById("numeroFactorial").value);
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
    document.getElementById("resultadoFactorial").textContent = "El factorial de " + numero + " es: " + factorial;
  }
  
  function convertirDolares() {
    let moneda = parseFloat(document.getElementById("colones").value);
    let dolares = moneda / 506.87;
    document.getElementById("resultadoDolares").textContent = "El monto de " + moneda + " colones equivale a " + dolares + " dolares";
  }
  
  function calcularPerimetro() {
    let largo = parseFloat(document.getElementById("largo").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let perimetro = (largo * 2) + (ancho * 2);
    document.getElementById("resultadoPerimetro").textContent = "El perímetro de la habitación es: " + perimetro + " metros";
  }
  
  function calcularCircunferencia() {
    let radio = parseFloat(document.getElementById("radio").value);
    let area = Math.PI * (radio * radio);
    let perimetro = 2 * Math.PI * radio;
    document.getElementById("resultadoCircunferencia").textContent = "El área de la circunferencia es: " + area + " metros cuadrados y el perímetro es: " + perimetro + " metros";
  }
  
  function mostrarTabla() {
    const numero = parseInt(document.getElementById("tablaNumero").value);
    const tablaDiv = document.getElementById("resultadoTabla");
  
    if (isNaN(numero)) {
      tablaDiv.innerHTML = "<p>Por favor, ingrese un número válido.</p>";
      return;
    }
  
    let tablaHTML = "<table>";
    tablaHTML += `<tr><th>${numero} x</th><th>Resultado</th></tr>`;
    for (let i = 1; i <= 10; i++) {
      tablaHTML += `<tr><td>${i}</td><td>${numero * i}</td></tr>`;
    }
    tablaHTML += "</table>";
  
    tablaDiv.innerHTML = tablaHTML;
  }