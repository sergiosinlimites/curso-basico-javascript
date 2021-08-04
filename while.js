var estudiantes = ["María", "Sergio", "Rosa", "Juan"];

function saludarEstudiantes(estudiante){
    console.log("Hola, " + estudiante);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var elegido = estudiantes.shift();
    saludarEstudiantes(elegido);
}