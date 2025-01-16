let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  alert("Puede Conducir!");
  console.log("Puede conducir!");
} else {
  alert("No puede Conducir!");
  console.log("No puede conducir!");
}

let fruta = prompt("¿Indica el nombre de una de estas frutas: manzana, banana, chile?");
let tieneManzana = fruta === "manzana";
let tieneBanana = fruta === "banana";

// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}
