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
  eliminiar: (req, res) => {
    res.send("Eliminacion de productos");
  },
};
module.exports = controladorProductos;
