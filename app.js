const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// view engine setup
app.set('view engine', 'ejs');

// Rutas
const rutasProductos = require('./routes/product.js');
const rutasIndex = require('./routes/index');
const rutasRecetas = require('./routes/recetas.js');

app.use('/', rutasIndex);
app.use('/productos',rutasProductos);

// app.use('/login',rutasIndex);
// app.use('/registro',rutasIndex);
// app.use('/compras',rutasIndex);
// app.use('/recetas', rutasRecetas);
// app.use('/vinos',rutasProductos);


app.listen(3000, () => {console.log("Servidor ejecutando en localhost:3000")});

module.exports = app;