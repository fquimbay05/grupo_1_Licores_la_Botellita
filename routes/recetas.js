const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

router.get('/recetas', mainController.receta);
// router.get('/receta/:menuId/', mainController.receta);

module.exports = router;
