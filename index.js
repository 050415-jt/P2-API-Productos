
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuración
app.use(cors());
app.use(express.json());


let productos = [
    {
        id: 1,
        nombre: "Laptop HP",
        precio: 12500,
        stock: 10
    },
    {
        id: 2,
        nombre: "Mouse Logitech",
        precio: 350,
        stock: 25
    },
    {
        id: 3,
        nombre: "Teclado mecánico",
        precio: 850,
        stock: 15
    }
];


// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a mi API REST de productos'
    });
});


app.get('/api/productos', (req, res) => {
    res.status(200).json(productos);
});


app.get('/api/productos/:id', (req, res) => {
    const id = Number(req.params.id);

    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado'
        });
    }

    res.status(200).json(producto);
});


app.post('/api/productos', (req, res) => {
    const { nombre, precio, stock } = req.body;

    if (
        typeof nombre !== 'string' ||
        !nombre.trim() ||
        typeof precio !== 'number' ||
        !Number.isFinite(precio) ||
        precio <= 0 ||
        !Number.isInteger(stock) ||
        stock < 0
    ) {
        return res.status(400).json({
            mensaje: 'Datos del producto inválidos'
        });
    }

    const nuevoProducto = {
        id: Math.max(0, ...productos.map(p => p.id)) + 1,
        nombre: nombre.trim(),
        precio,
        stock
    };

    productos.push(nuevoProducto);

    res.status(201).json(nuevoProducto);
});

app.put('/api/productos/:id', (req, res) => {
    const id = Number(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    const { nombre, precio, stock } = req.body;

    producto.nombre = nombre;
    producto.precio = precio;
    producto.stock = stock;

    res.json(producto);
});

// DELETE - Eliminar un producto por ID
app.delete('/api/productos/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = productos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    const productoEliminado = productos.splice(indice, 1);

    res.json({
        mensaje: "Producto eliminado correctamente",
        producto: productoEliminado[0]
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
