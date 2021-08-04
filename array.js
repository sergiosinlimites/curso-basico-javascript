var frutas = ["Manzana", "Pera", "Banana"];

console.log(frutas);

console.log(frutas.length); // para ver qué tamaño tiene el array, nos arroja 3

console.log(frutas[0]); // se inicia en el 0, que es manzana; banana es 2.

// métodos

var masFrutas = frutas.push("Uva"); //añade un nuevo elemento al final del array, queda en la posicion 4

var ultimo = frutas.pop(); //elimina el último elemento que existe en el array, es decir, la Uva, no hay que agregarle el parámetro "Uva"

var entrarPrimero = frutas.unshift("Cereza"); //añade este nuevo elemento pero al principio del array;

console.log("el nuevo array con la fruta añadida al inicio es " + frutas);

var eliminado = frutas.shift(); //elimina el primer elemento del array, no hay que pasarle ningún parámetro

console.log("se elimino " + eliminado);

var posicion = frutas.indexOf("Pera");

console.log("la posición de 'Pera' es " + posicion);
