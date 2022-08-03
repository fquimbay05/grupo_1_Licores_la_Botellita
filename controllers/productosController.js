const listaProductos = [
  {
      id:1,
      nombre: 'Ron Viejo De Caldas',
      descripcion: 'Ron Viejo De Caldas Tradicional',
      precio: '47.000',
      descuento: '10',
      categoria: 'ron',
      img: 'ronviejodecaldas.png',
      tipo: 'nuevo'
  },
  {
      id:2,
      nombre: 'Ron Viejo De Caldas',
      descripcion: 'Ron Viejo Caldas Gran Reserva Especial',
      precio: '55.000',
      descuento: '10',
      categoria: 'ron',
      img: 'mojito.jpg',
      tipo: 'nuevo'
  },
  {
      id:3,
      nombre: 'Ron Viejo De Caldas',
      descripcion: 'Ron Viejo de Caldas Extraviejo 5 Años',
      precio: '87.000',
      descuento: '10',
      categoria: 'ron',
      img: 'mojito.jpg',
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
    let producto = listaProductos.find(producto => producto.categoria == "vino");
    console.log(producto);
    res.render("productos2", { producto: producto });
    res.send('Listado de vinos');
  },
  ron: (req, res) => {
    let producto = listaProductos.find(producto => producto.categoria == "ron");
    console.log(producto);
    res.render("productos2", { producto: producto });
    res.send('Listado de rones');
  },  
};
module.exports = controladorProductos;
