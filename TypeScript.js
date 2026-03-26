// JavaScript

//let edad = 30;
//edad = "treinta";

//TypeScrypt

//let edad: number = 30;

//Tipos de datos básicos para TypeScript

//number
let edad: number = 30;

//string
let nombre: string = "Abraham";

//boolean
let esMayorDeEdad: boolean = true;

//arreglo
let numeros: number[] = [1, 2, 3, 4, 5];

//tupla
let persona: [string, number] = ["Abraham", 30];    

//objeto
let persona: { nombre: string; edad: number } = {
    nombre: "Abraham",
    edad: 30
};

//funciones tipadas
function sumar(a: number, b: number): number {
    return a + b;
}