const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hola mundo');
});

app.get('/saludo', (req, res) => {
  res.json({
    mensaje: 'Hola Abraham, ya eres backend dev 😎'
  });
});

const productos = [
    {id: 1, nombre: 'Laptop', precio: 15000},
    {id: 2, nombre: 'Mouse', precio: 300}
];

app.get('/productos',(req,res) => {
    res.json(productos);
});

app.get('/productos/:id',(req,res) => {
    const id = parseInt(req.params.id);

    const producto = productos.find(p => p.id === id);

    res.json(producto);
});

app.post('/productos',(req,res) => {
    const nuevoProducto = req.body;

    productos.push(nuevoProducto);

    res.json({
        mensaje: 'Producto agregado',
        data: nuevoProducto
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});

