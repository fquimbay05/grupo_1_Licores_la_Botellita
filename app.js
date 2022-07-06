const express = require("express"); //Requerimos el modulo Express
const app = express(); //Ejecutamos la función, creamos una variable y almacenamos express.
const path = require('path')
app.use(express.static('public'))
app.use(express.static('views'))


app.listen(3000, () => {console.log("Servidor ejecutando en localhost:3000")});

app.get("/", (req, res) => {
    let index= path.resolve('./views/index.html');
    res.sendFile(index);
  })  

/* app get producto */
app.get('/productos', (req, res) =>{
  let product= path.resolve('./views/productos.html'); 
  res.sendFile(product);
})

/* app get para regalar */
app.get('/para_regalar', (req, res) =>{
  let gift= path.resolve('./views/para_regalar.html'); 
  res.sendFile(gift);
})

/* app get para el club*/
app.get('/club', (req, res) =>{
  let clu= path.resolve('./views/club.html'); 
  res.sendFile(clu);
})
/* app get para Ofertas */
app.get('/ofertas', (req, res) =>{
  let offer= path.resolve('./views/ofertas.html'); 
  res.sendFile(offer);
})

/* app get para servicios */
app.get('/servicios', (req, res) =>{
  let service= path.resolve('./views/servicios.html'); 
  res.sendFile(service);
})

/* app get para login */
app.get('/login', (req, res) =>{
  let login_user= path.resolve('./views/login.html'); 
  res.sendFile(login_user);
})

/* app get para login */
app.get('/registro', (req, res) =>{
  let registre= path.resolve('./views/registro.html'); 
  res.sendFile(registre);
})