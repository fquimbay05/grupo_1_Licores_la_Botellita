var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const usuariosController = require('../controllers/usuariosController');

// ************ Multer ************ 
var storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, 'public/img')
  },
  filename: function(req,file,cb){
      console.log("Adicionando Usuarios", file)
      cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname))
  }
})
var upload = multer({storage: storage})

router.post('/', upload.any(), usuariosController.store); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
