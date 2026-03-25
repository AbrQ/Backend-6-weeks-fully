const nombre = "Abraham";
let edad = 30;

const saludar = (nombre) => {
  return "Hola " + nombre;
}

const esperar = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Terminé");
    }, 2000);
  });
}

const main = async () => {
  console.log(saludar(nombre));

  const resultado = await esperar();
  console.log(resultado);
}

main();