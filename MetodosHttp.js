let productos = [
    {id: 1, nombre: "Laptop",precio: 15000},
    {id: 2, nombre: "Monitor",precio: 3500}
];

//GET
app.get('/productos',(req,res) => {
    res.json(productos);
});

//GET por ID
app.get('/productos/:id',(req,res) => {
    const id = parseInt(req.params.id);

    const producto = productos.find(p => p.id === id);

    if (!producto){
        return res.status(404).json({ mensaje: "Producto no encontrado"});
    }

    res.json(producto);

})

//POST
app.post('/productos',(req,res) => {
    const nuevo = req.body;
    productos.push(nuevo);
    res.status(201).json(nuevo);
});

//PUT
app.put('/productos/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const datos = req.body;

    const index = productos.findIndex( p => p.id === id);

    if (index === -1){
        
        return res.status(404).json({ mensaje: "Producto no encontrado"});
    }

    productos[index] = { ...productos[index], ...datos };

    res.json(productos[index]);
});

//DELETE
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  productos.splice(index, 1);

  res.json({ mensaje: "Producto eliminado" });
});