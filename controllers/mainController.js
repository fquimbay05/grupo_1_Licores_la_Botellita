const listaRecetas = [
    {
        id:1,
        titulo: 'Mojito',
        descripcion: 'Este cóctel tan famoso a nivel mundial hace patria de Cuba, el país que lo vio nacer',
        html: 'mojito.html',
        img: 'mojito.jpg'
    },
    {
        id:2,
        titulo: 'Margarita',
        descripcionCorta: 'Es un cóctel originario de México',        
        html: 'margarita.html',
        img: 'margarita.jpg'
    },
    {
        id:3,
        titulo: 'Martini',
        descripcionCorta: 'Martini, Dry Martini o Martini seco, un cóctel exquisito y sencillo',
        html: 'martini.html',
        img: 'martini.jpg'
    },
    {
        id:4,
        titulo: 'Daiquiri',
        descripcionCorta: 'El cóctel cubano por excelencia',
        html: 'daiquiri.html',
        img: 'daiquiri.jpg'
    }
]

const fs = require('fs');
const path = require('path');

const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  receta: (req, res) => {
    // let plato = listaRecetas.find(plato => plato.id == req.params.menuId);
    // res.render("receta", { receta: receta });
    // res.send('Listado de Recetas pruebas');
    res.render("receta",{listaRecetas});
  },
  listar: (req, res) => {
    res.send("Receta " + req.params.idReceta);
  },  
  edit: (req, res) => {
    res.send("Receta  " + res.params.idReceta);
    // let id = res.params.idReceta;
    // let receta = listaRecetas.find(receta => receta.id == id);
    // let plato = listaRecetas.find(plato => plato.id == req.params.menuId);
    // res.render("receta", { receta: receta });
    // res.send('Listado de Recetas');
    //res.render("receta");
  },
  editar: (req, res) => {
    res.send("Receta: " + req.params.idReceta);
  },  
};

module.exports = mainController;
