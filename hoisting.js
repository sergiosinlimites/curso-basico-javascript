// el console.log hace hoisting ya que esa no existe y crea:
// var miNombre = undefined;
console.log(miNombre);

var miNombre = "Diego";

////////////////////////////////////////

hey();

function hey(){
    console.log("Hola " + miNombre);
}

var miNombre = "Sergio";

// nos arrojará: "Hola undefined"

// al llegar a la línea 9 JS ve que se necesita una función, así que la manda hacía arriba del todo, al igual que con var miNombre, solo que esta última toma el atributo de undefined.