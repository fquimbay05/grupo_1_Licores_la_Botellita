const express = require('express');
const app = express();
const path = require('path');

const rutasProductos = require('./routes/index.js');
var rutasIndex = require('./routes/index');
var rutasRecetas = require('./routes/recetas.js');
const methodOverride = require('method-override');

// view engine setup
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', rutasIndex);
app.use('/recetas', rutasRecetas);
app.use('/productos',rutasProductos);
app.use('/vinos',rutasProductos);
app.use('/login',rutasIndex);
app.use('/registro',rutasIndex);
app.use('/compras',rutasIndex);
app.use('/ron',rutasIndex);

app.listen(3000, () => {console.log("Servidor ejecutando en localhost:3000")});

module.exports = app;