const listaRecetas = [
    {
        id:1,
        titulo: 'Mojito',
        descripcion: 'Este cóctel tan famoso a nivel mundial hace patria de Cuba, el país que lo vio nacer',
        html: 'mojito.html',
        ingredientes: ['5 cl de tequila', '2,5 cl de triple seco que es licor de naranja. Ejemplos de licores triple seco son Cointreau o Grand Marnier.', '2,5 cl de zumo de lima recién exprimido y un trocito de lima para mojar el borde de las copas.', 'Sal', 'Hielos'],        
        instrucciones: ['Coloca una rama de menta en cada vaso, agrega un caballito de ron, una cucharada de azúcar y un par de rodajas de limón.','Aplasta con un pilón y después agrega el agua mineral y hielo'],
        img: 'mojito.jpg'
    },
    {
        id:2,
        titulo: 'Margarita',
        descripcion: 'Es un cóctel originario de México',   
        ingredientes: ['5 cl de tequila', '2,5 cl de triple seco que es licor de naranja. Ejemplos de licores triple seco son Cointreau o Grand Marnier.', '2,5 cl de zumo de lima recién exprimido y un trocito de lima para mojar el borde de las copas.', 'Sal', 'Hielos'],   
        instrucciones: [],                  
        html: 'margarita.html',
        img: 'margarita.jpg'
    },
    {
        id:3,
        titulo: 'Martini',
        descripcion: 'Martini, Dry Martini o Martini seco, un cóctel exquisito y sencillo',
        ingredientes: ['red', 'green', 'blue'],     
        instrucciones: [],                      
        html: 'martini.html',
        img: 'martini.jpg'
    },
    {
        id:4,
        titulo: 'Daiquiri',
        descripcion: 'El cóctel cubano por excelencia',
        ingredientes: ['red', 'green', 'blue'],                
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
    //res.send("Receta  " + req.params.idReceta);
     let id = req.params.idReceta;
     let receta = listaRecetas.find(receta => receta.id == id);
     let rederizar = receta.html
     console.log(receta);
     //res.render(rederizar);
     res.render("cocteles", { receta: receta });
    // res.send('Listado de Recetas');
    //res.render("receta");
  },
  editar: (req, res) => {
    res.send("Receta: " + req.params.idReceta);
  }, 
  servicio: (req, res) => {
    res.send("Servicios: " );
  },  
};

module.exports = mainController;
