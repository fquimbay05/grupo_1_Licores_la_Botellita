const express = require('express');
const router = express.Router();
const path = require('path');

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);
// router.get('/search', mainController.search); 
router.get('/servicios', mainController.servicio);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);
router.get('/compras', mainController.compras);

router.get('/recetas', mainController.receta);
router.get('/recetas/:idReceta', mainController.edit);

module.exports = router;
