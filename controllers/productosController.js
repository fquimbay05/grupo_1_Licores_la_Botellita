const listaProductos = [
  {
      id:1,
      nombre: 'Ron Viejo De Caldas',
      descripcion: 'Ron Viejo De Caldas Tradicional',
      precio: '47.000',
      descuento: '10',
      categoria: 'ron',
      img: 'ronviejodecaldas.png',
      tamano: '750',
      tipo: 'nuevo'
  },
  {
      id:2,
      nombre: 'Ron Viejo De Caldas',
      descripcion: 'Ron Viejo Caldas Gran Reserva Especial',
      precio: '55.000',
      descuento: '10',
      categoria: 'ron',
      img: 'ronviejodecaldasgranreserva.png',
      tamano: '750',
      tipo: 'nuevo'
  },
  {
      id:3,
      nombre: 'Ron Viejo De Caldas',
      descripcion: 'Ron Viejo de Caldas Extraviejo 5 Años',
      precio: '87.000',
      descuento: '10',
      categoria: 'ron',
      img: 'ronviejodecaldasextraviejo.png',
      tamano: '750',
      tipo: 'nuevo'
  },
  {
    id:4,
    nombre: 'Vino Rosado',
    descripcion: 'Vino Rosado',
    precio: '32.000',
    descuento: '15',
    categoria: 'vino',
    img: 'vinorosado.png',
    tamano: '750',
    tipo: 'nuevo'
},
{
  id:5,
  nombre: 'Vino tinto',
  descripcion: 'Vino tinto Dada',
  precio: '37.000',
  descuento: '15',
  categoria: 'vino',
  img: 'vinotintoDada.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:6,
  nombre: 'Buchanans',
  descripcion: 'Whisky Buchanans Deluxe 12 Años Blended',
  precio: '80.600',
  descuento: '15',
  categoria: 'whisky',
  img: 'buchanansdeluxe.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:7,
  nombre: 'Johnnie Walker',
  descripcion: 'Whisky Johnnie Walker Red Label Blended',
  precio: '57.800',
  descuento: '15',
  categoria: 'whisky',
  img: 'johnniewalker.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:8,
  nombre: 'Old Parr',
  descripcion: 'Whisky Old Parr 12 Años Blended',
  precio: '125.200',
  descuento: '15',
  categoria: 'whisky',
  img: 'oldparr.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:9,
  nombre: 'Buchanans',
  descripcion: 'Whisky Buchanans Master Blended',
  precio: '158.200',
  descuento: '10',
  categoria: 'whisky',
  img: 'buchanansmaster.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:10,
  nombre: 'Chivas Regal',
  descripcion: 'Whisky Chivas Regal 12 Años',
  precio: '104.200',
  descuento: '20',
  categoria: 'whisky',
  img: 'chivas.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:11,
  nombre: 'Jose Cuervo Especial',
  descripcion: 'Tequila Jose Cuervo Especial Reposado',
  precio: '80.900',
  descuento: '5',
  categoria: 'tequila',
  img: 'Tequilajosecuervo.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:12,
  nombre: 'Don Julio',
  descripcion: 'Tequila Don Julio Reserva Reposado',
  precio: '216.800',
  descuento: '20',
  categoria: 'tequila',
  img: 'donjulio.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:13,
  nombre: '1800',
  descripcion: 'Tequila Reserva 1800 Añejo',
  precio: '190.900',
  descuento: '20',
  categoria: 'tequila',
  img: 'tequilareserva.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:14,
  nombre: 'Convier',
  descripcion: 'Licor Convier Triple Sec',
  precio: '60.700',
  descuento: '20',
  categoria: 'coctel',
  img: 'licorconvier.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:15,
  nombre: 'Martini',
  descripcion: 'Martini Rosso',
  precio: '53.900',
  descuento: '20',
  categoria: 'coctel',
  img: 'martinirosso.png',
  tamano: '750',
  tipo: 'nuevo'
},
{
  id:16,
  nombre: 'Vermouth Noilly',
  descripcion: 'Vermouth Noilly Prat Extra Dry',
  precio: '97.900',
  descuento: '10',
  categoria: 'coctel',
  img: 'vermouth.png',
  tamano: '750',
  tipo: 'nuevo'
},
]

const path = require("path");
const controladorProductos = {
  leer: (req, res) => {
    res.render("productos");
  },
  listar: (req, res) => {
    res.send("Bienvenido al producto " + req.params.idProducto);
  },
  crear: (req, res) => {
    res.send("Creacion de productos");
  },
  eliminar: (req, res) => {
    res.send("Eliminacion de productos");
  },
  editar: (req, res) => {
    //res.send("producto  " + req.params.idProducto);
     let id = req.params.idProducto;
     let producto = listaProductos.find(producto => producto.id == id);
     console.log(producto);
     res.render("ron", { producto: producto });
    // res.send('Listado de producto');
  },
  vino: (req, res) => {
    let categoria = 'vino';
    let producto = [];
    for (let i = 0; i < listaProductos.length; i++) {
      if (listaProductos[i].categoria == categoria) { 
        producto = producto.concat(listaProductos[i]);  
      }
    }
    console.log(producto);
    res.render("productos2", { producto: producto });
    res.send('Listado de vinos');
  },
  ron: (req, res) => {
    // let producto = listaProductos.find(producto => producto.categoria == "ron");
    let categoria = 'ron';
    let producto = [];
    for (let i = 0; i < listaProductos.length; i++) {
      if (listaProductos[i].categoria == categoria) { 
        producto = producto.concat(listaProductos[i]);  
      }
    }
    console.log(producto);
    res.render("productos2", { producto: producto });
  },  
  whisky: (req, res) => {
    let categoria = 'whisky';
    let producto = [];
    for (let i = 0; i < listaProductos.length; i++) {
      if (listaProductos[i].categoria == categoria) { 
        producto = producto.concat(listaProductos[i]);  
      }
    }
    console.log(producto);
    res.render("productos2", { producto: producto });
    res.send('Listado de vinos');
  },
  tequila: (req, res) => {
    let categoria = 'tequila';
    let producto = [];
    for (let i = 0; i < listaProductos.length; i++) {
      if (listaProductos[i].categoria == categoria) { 
        producto = producto.concat(listaProductos[i]);  
      }
    }
    console.log(producto);
    res.render("productos2", { producto: producto });
    res.send('Listado de vinos');
  },
  coctel: (req, res) => {
    let categoria = 'coctel';
    let producto = [];
    for (let i = 0; i < listaProductos.length; i++) {
      if (listaProductos[i].categoria == categoria) { 
        producto = producto.concat(listaProductos[i]);  
      }
    }
    console.log(producto);
    res.render("productos2", { producto: producto });
    res.send('Listado de vinos');
  },
  detalle: (req, res) => {
    //res.send("Receta  " + req.params.idProducto);
    let id = req.params.idProducto;
    let producto = listaProductos.find((producto) => producto.id == id);
    let categoria = producto.categoria;
    console.log(categoria);
    //res.render(rederizar);
    res.render("detalleproduct.ejs", { producto: producto });
 }

};
module.exports = controladorProductos;
