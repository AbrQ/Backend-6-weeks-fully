//Interfaces en TypeScript -> definen la forma de un objeto, especificando las propiedades y sus tipos de datos.

interface Usuario {
    nombre: string;
    edad: number;
    correo: string; 
}

const usuario1: Usuario = {
    nombre: "Abraham",
    edad: 31,
    correo: "abraham@example.com"  
};

//este es un error:

const usuario2: Usuario = {
    nombre: "Maria",
    edad: 25,   
};

//Opcionalidad de propiedades en interfaces
//En TypeScript, puedes hacer que una propiedad de una interfaz sea opcional utilizando el símbolo de interrogación (?) después del nombre de la propiedad. Esto significa que la propiedad no es obligatoria al crear un objeto que implemente esa interfaz.
interface UsuarioOpcional {
    nombre: string;
    edad: number;
    correo?: string; // Propiedad opcional
}

const usuario3: UsuarioOpcional = {
    nombre: "Carlos",
    edad: 28
    // correo no es obligatorio
};