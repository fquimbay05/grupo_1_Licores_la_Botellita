const express = require("express"); //Requerimos el modulo Express
const app = express(); //Ejecutamos la función, creamos una variable y almacenamos express.
const path = require('path')
//const rutaAbsoluta='./views/';
app.use(express.static('public'))


app.listen(3040, () => {console.log("Servidor ejecutando en localhost:3040")});

app.get("/", (req, res) => {
    let index= path.resolve('./views/index.html');
    res.sendFile(index);
  })