const express = require("express"); //Requerimos el modulo Express
const app = express(); //Ejecutamos la función, creamos una variable y almacenamos express.
const path = require('path')

const rutasProductos = require('./routes/productos.js');
var rutasIndex = require('./routes/index');
var rutasRecetas = require('./routes/recetas');
const methodOverride = require('method-override');

// app.use(express.static('public'))
// app.use(express.static('views'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/productos',rutasProductos);

app.listen(3000, () => {console.log("Servidor ejecutando en localhost:3000")});

app.use(methodOverride('_method'));

app.use('/', rutasIndex);
app.use('/recetas', rutasRecetas);

/* app get producto wisky */
app.get('/whisky', (req, res) =>{
  let product= path.resolve('./views/whisky.html'); 
  res.sendFile(product);
})
/* app get producto Tequila */
app.get('/tequila', (req, res) =>{
  let product= path.resolve('./views/tequila.html'); 
  res.sendFile(product);
})
/* app get producto Ron */
app.get('/ron', (req, res) =>{
  let product= path.resolve('./views/ron.html'); 
  res.sendFile(product);
})
/* app get producto coctel */
app.get('/coctel', (req, res) =>{
  let product= path.resolve('./views/coctel.html'); 
  res.sendFile(product);
})
/* app get producto wisky_chivasregal */
app.get('/detalleproducto', (req, res) =>{
  let product= path.resolve('./views/detalleproducto.html'); 
  res.sendFile(product);
})


module.exports = app;