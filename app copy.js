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

/* app get producto vinos */
app.get('/showCart', (req, res) =>{
  let cart= path.resolve('./views/shopping_cart.html'); 
  res.sendFile(cart);
})

/* app get producto vinos */
app.get('/productos', (req, res) =>{
  let product= path.resolve('./views/productos.html'); 
  res.sendFile(product);
})

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

/* carrito de compras */
app.get('/compras', (req, res) =>{                        //Modelo
  let compra= path.resolve('./views/compras.html');       //Ruta 
  res.sendFile(compra);                                   //Controlador
})

// /* app get Vinos */
app.get('/vinos', (req, res) =>{
  let gift= path.resolve('./views/vinos.html'); 
  res.sendFile(gift);
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

/* app get para registro */
app.get('/registro', (req, res) =>{
  let registre= path.resolve('./views/registro.html'); 
  res.sendFile(registre);
})