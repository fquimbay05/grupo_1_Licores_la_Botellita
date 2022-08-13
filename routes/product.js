var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const productosController = require('../controllers/productosController');

// ************ Multer ************ 
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img')
    },
    filename: function(req,file,cb){
        console.log("hola como estas 2222220000=====>>>>", file)
        cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

router.get('/', productosController.leer);

router.get('/ron', productosController.ron);
router.get('/vinos', productosController.vino);
router.get('/whisky', productosController.whisky);
router.get('/tequila', productosController.tequila);
router.get('/coctel', productosController.coctel);
router.get('/crear', productosController.crear); 
router.get('/:idProducto', productosController.detalle);

router.post('/', upload.any(), productosController.store); 

router.get('/edit/:id', productosController.edit); 
router.patch('/edit/:id', upload.any(),productosController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productosController.destroy); 

module.exports = router;
