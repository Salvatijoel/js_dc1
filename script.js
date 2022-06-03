/* Algoritmo para agregar productos al changuito */

let changuito = "";
let producto;

do {
    producto = prompt("Ingresa un producto que quieras comprar - Escribi ESC cuando termines");
    if (producto != "ESC") {
        changuito = changuito + producto + "\n";
    }
} while (producto != "ESC");

console.log("Los siguientes productos están en tu changuito:");
console.log(changuito);
