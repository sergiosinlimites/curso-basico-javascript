function auto(marca, modelo, annio){
    this.brand = marca;
    this.model = modelo;
    this.year = annio;
}

var newCar = new auto("Toyota", "Courier", 2019);

var newCar = new auto("Tesla", "Model Y", 2020);

////////// ejercicio

function house(tamaño, estrato, costo, barrio){
    this.squaremeters = tamaño;
    this.stratum = estrato;
    this.cost = costo;
    this.neighborhood = barrio;
}

let purchasedHouse = [];
let stratums = [3, 4, 5, 5, 6];
let neighborhoods = ["Chicó Reservado", "Rosales", "Santa Bárbara", "Country", "Cedritos"];

for(let i = 0; i < 10; i++){
    let sqrMeters = Math.floor(Math.random() * (600 - 250) + 250)
    purchasedHouse.push(new house(
        sqrMeters, 
        stratums[Math.floor(i / 2)], 
        Math.floor((Math.random() * (14 - 8.5) + 8.5) * sqrMeters), // esto hace un número random entre el costo minimo y máximo por metro cuadrado, por la cantidad de metros cuadrados de la casa.
        neighborhoods[Math.floor(i / 2)]))
    /* console.log(purchasedHouse); */
    console.log("La casa de " + purchasedHouse[i].squaremeters + " metros cuadrados, en el barrio " + purchasedHouse[i].neighborhood + " de estrato " + purchasedHouse[i].stratum + " le cuesta " + purchasedHouse[i].cost + " millones de pesos colombianos");
}