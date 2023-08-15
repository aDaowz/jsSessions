// Palabra reservada: Nombres que no pueden ser usados por el dev, ya que están destinados al uso del sistema

// Variable: Un espacio de memoria (ram) que tiene asignado un identificador (tag)  AC815153 peliculaFavorita

// "let": indica la creación de una nueva variable
// "miVariable": el nombre que el programador decidio identificar
// "=": Operador de asignación
// "10": El valor que la variable va a guardar

let datoNumerico = 7.5; // number
let datoString = "Hola Mundo"; // string
let datoBooleano = true; // boolean

console.log("datoNumerico: ", datoNumerico, typeof datoNumerico);
console.log("datoString: ", datoString, typeof datoString);
console.log("datoBooleano: ", datoBooleano, typeof datoBooleano);

let miVariable = 10;
console.log("1. Contenido de miVariable: ", miVariable);
miVariable = "Hola mundo";
console.log("2. Contenido de miVariable: ", miVariable);

// Concatenacion de string
const nombre = "Nilza";
const apellido = "Barcelo";

// let nombreCompleto = nombre + " " + apellido;

console.log("(Antiguo) Nombre completo: " + nombre + " " + apellido);
console.log(`(Nuevo) Nombre completo: ${nombre} ${apellido}`);