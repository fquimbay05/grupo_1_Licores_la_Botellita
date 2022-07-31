let express = require('express');
let router = express.Router();

//Listar un producto
const productosController = require('../controllers/productosController.js');
router.get('/:idProducto', productosController.listar);
router.get('/', productosController.leer);


//Editar un producto
router.put

//Adicionar un producto
router.post

//Eliminar un producto
router.delete

module.exports=router;