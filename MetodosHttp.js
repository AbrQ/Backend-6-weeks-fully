const productos = [
    {id: 1, nombre: "Laptop",precio: 15000}
];

//GET
app.get('/productos',(req,res) => {
    res.json(productos);
});

//POST
app.put('/productos/:id',(req,res) => {
    const nuevo = req.body;
    productos.push(nuevo);
    res.json(nuevo);
});

//PUT
app.put('/productos/:id',(req,res) => {
    res.send("Actualizar producto");
});

//DELETE
app.delete('/productos/:id',(req,res) => {
    res.send("Eliminar producto");
});