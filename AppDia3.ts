interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string; // Propiedad opcional
}   

const producto1: Producto []= [
    {
        id: 1, nombre: "Laptop", precio: 999.99, descripcion: "Una laptop potente"
    },
    {
        id: 2, nombre: "Smartphone", precio: 499.99
    }
];

const obtenerProducto = (): Producto[] => {
    return producto1;
};  

console.log(obtenerProducto());

//ver el resultado en JSON
console.log(JSON.stringify(obtenerProducto(), null, 2));