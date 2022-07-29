var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

router.get('/recetas', mainController.receta);

router.get('/recetas/:idReceta', mainController.edit);
router.get('/:idReceta', mainController.edit);



module.exports = router;
