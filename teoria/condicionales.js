console.log("Javascript loaded");

// Condicional if

// "if": palabra reservada para comparar.
// (CONDICION): Dentro de los paréntesis colocamos la condición que queremos evaluar. Está esperando una resolución booleana
// { CODIGO }: Fragmento de código que se va a ejecutar si la condición se cumple
// else{ CODIGO }: (opcional) Fragmento de código que se va a ejecutar si la condición no se cumple

let edad = 20;
const mayoriaEdad = 18;

// Evaluar si se es mayor de edad
if(edad >= mayoriaEdad){ // 18 > 18
    console.log('%cSí es mayor de edad', 'color: green');
}
else{
    console.log('%cNo es mayor de edad', 'color: red');
}


// Si vamos a usar paraguas / sombrilla
let estaLloviendo = false;
let haySol = false;

// Disyunción // OR
if(estaLloviendo || haySol){
    console.log("Sí voy a usar paraguas");
}
else{
    console.log("No voy a usar paraguas");
}

// Evaluar si puedo hacer un dibujo a lapiz
let tengoLapiz = false;
let tengoHoja = false;

// Conjunción // AND
if(tengoLapiz && tengoHoja){
    console.log("Puedo hacer un dibujo.");
}
else{
    console.log("No puedo hacer un dibujo.");
}

// Switch Case
