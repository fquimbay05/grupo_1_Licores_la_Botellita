var express = require('express');
var app = express();
var path = require('path');

var rutasIndex = require('./routes/index');
var rutasRecetas = require('./routes/recetas');

app.listen(3000, () => {console.log("Servidor ejecutando en localhost:3000")});

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', rutasIndex);
app.use('/recetas', rutasRecetas);

module.exports = app;