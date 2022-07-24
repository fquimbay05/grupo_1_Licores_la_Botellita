let express = require('express');
let router = express.Router();

//Listar un producto
const productosController = require('../controllers/productosController.js');
router.get('/:idProducto', productosController.leer);
router.get('/', productosController.leer);

//Editar un producto
router.put

//Adicionar un producto
router.get

//Eliminar un producto
router.delete

module.exports=router;