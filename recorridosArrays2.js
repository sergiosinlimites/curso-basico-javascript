let articulos = [
    { nombre: "Bici", costo: 2500},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo:10000},
    { nombre: "Laptop", costo:20000},
    { nombre: "Laptop", costo:15000},
    { nombre: "Audifonos", costo:1700}
];

// método .find, evalúa un true o un false

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
}); // le pedimos que nos regrese de los artículos un artículo donde el nombre sea exactamente igual a laptop.

encuentraArticulo

// método forEach, no genera un nuevo array, solo hará el filtrado sobre el array principal

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
}); // esto por ejemplo funciona al momento de que el usuario hace un filtro en un ecommerce

// método some nos regresa verdadero o falso a partir de artículos que cumplan la validación.

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 3000;
});

articulosBaratos; // se llama y devuelve "true", ya que sí existen artículos menores a 3000, es parecido a filter, solo que filter si te muestra los atríbutos (o sea las características) de los objetos.