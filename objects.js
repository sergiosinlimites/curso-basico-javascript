let miCasa = {
    bedroomsNum: 6,
    bathroomsNum: 4,
    squareMeters: 400,
    demolish: function(){
        console.log(`La casa tiene ${this.bathroomsNum} baños y ${this.bedroomsNum} cuartos`);
    }
};

miCasa.bedroomsNum; // devuelve 6;

miCasa.demolish() // devuelve la casa tiene 4 baños y 6 cuartos

// this hace referencia al objeto, en este caso "miCasa" que es el padre.