//Ejemplo de funcion con async / await

const obtenerUsuario = async () =>{
    const usuario = await fakeDB();

    if (usuario.edad > 18) {
        return "Mayor de edad";
    }
    
    return "Menor de edad";

}