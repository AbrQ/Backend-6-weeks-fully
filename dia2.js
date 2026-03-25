//JavaScript moderno (let, const, arrow functions, async/await) (dia 2)

//variables
let edad = 31;
edad = 30;
//constantes
const nombre = "Abraham";

//arrow functions 
//forma tradicional
function sumar(a , b) { 
return a + b;
}
//forma moderna
const restar = (a , b) => a - b;

//async / await
//en JavaScript muchas cosas son asíncronas, por ejemplo: Llamada a la base de datos, API's, Archivos

//Sin Async/await (estilo antiguo)
getData().then(data => {
    console.log(data);
});

//Con async/await (estilo moderno)  Async = funcion que espera cosas / Await = espera a que algo termine
const obtenerDatos = async () => {
    const data = await getData();
    console.log(data);
}
