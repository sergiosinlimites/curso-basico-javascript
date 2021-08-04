var estudiantes = ["María", "Sergio", "Rosa", "Andrés", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); //esto solo funciona con las comillas invertidas (alt + 96)
}

for(let i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// otra forma

for(let estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}