const prompt = require("prompt-sync")();

let ejecuciones = 0;
let sumaCount = 0;
let restaCount = 0;
let multiplicacionCount = 0;
let divisionCount = 0;

while (true) {
  let seguir = prompt("Bienvenido a la calculadora, ¿quieres seguir? s/n: ");
  
  if (seguir.toLowerCase() !== "s") {
    break;
  }

  ejecuciones++;

  let opcion = prompt("1.- suma, 2.- resta 3.- Multiplicacion 4.- Division, ¿qué quieres hacer? ");
  
  let n1, n2; // Declarar las variables fuera del switch
  
  switch (opcion) {
    case "1":
      console.log("Esto es suma");
      n1 = parseInt(prompt("Ingrese número 1: "));
      n2 = parseFloat(prompt("Ingrese número 2: "));
      if (!isNaN(n1) && !isNaN(n2)) {
        sumaCount++;
        let resultado = n1 + n2;
        console.log("Resultado:", resultado);
      } else {
        console.log("Entrada inválida. Introduce números válidos.");
      }
      break;

    case "2":
      console.log("Esto es resta");
      n1 = parseInt(prompt("Ingrese número 1: "));
      n2 = parseFloat(prompt("Ingrese número 2: "));
      if (!isNaN(n1) && !isNaN(n2)) {
        restaCount++;
        let resultado = n1 - n2;
        console.log("Resultado:", resultado);
      } else {
        console.log("Entrada inválida. Introduce números válidos.");
      }
      break;

    case "3":
      console.log("Esto es multiplicación");
      n1 = parseInt(prompt("Ingrese número 1: "));
      n2 = parseFloat(prompt("Ingrese número 2: "));
      if (!isNaN(n1) && !isNaN(n2)) {
        multiplicacionCount++;
        let resultado = n1 * n2;
        console.log("Resultado:", resultado);
      } else {
        console.log("Entrada inválida. Introduce números válidos.");
      }
      break;

    case "4":
      console.log("Esto es división");
      n1 = parseInt(prompt("Ingrese número 1: "));
      n2 = parseFloat(prompt("Ingrese número 2: "));
      if (!isNaN(n1) && !isNaN(n2) && n2 !== 0) {
        divisionCount++;
        let resultado = n1 / n2;
        console.log("Resultado:", resultado);
      } else {
        console.log("Operación inválida. Asegúrate de ingresar números válidos y que el divisor no sea cero.");
      }
      break;

    default:
      console.log("Opción inválida");
      break;
  }
}

console.log("Programa ejecutado", ejecuciones, "veces.");
console.log("Suma:", sumaCount, "resta:", restaCount, "multiplicación:", multiplicacionCount, "división:", divisionCount);
