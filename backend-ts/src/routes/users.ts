//GET por id

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(user);
});

//POST

router.post('/', (req, res) => {
    const nuevo = req.body;
    users.push(nuevo);
    res.status(201).json(nuevo);
});

export default router;