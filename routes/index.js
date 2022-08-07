var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');
const productosController = require('../controllers/productosController');

/* GET home page. */
router.get('/', mainController.index);
router.get('/productos', productosController.leer);
router.get('/recetas', mainController.receta);
router.get('/servicios', mainController.servicio);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);
router.get('/compras', mainController.compras);
router.get('/ron', productosController.ron);
router.get('/vinos', productosController.vino);
router.get('/whisky', productosController.whisky);
router.get('/productos/:idProducto', productosController.detalle);

router.get('/tequila', productosController.tequila);
router.get('/coctel', productosController.coctel);

router.get('/recetas/:idReceta', mainController.edit);

module.exports = router;
