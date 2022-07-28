const listaRecetas = [
    {
        id:1,
        titulo: 'Mojito',
        descripcion: 'Este cóctel tan famoso a nivel mundial hace patria de Cuba, el país que lo vio nacer',
        precio: '65.50',
        img: 'mojito.jpg'
    },
    {
        id:2,
        titulo: 'Margarita',
        descripcionCorta: 'Es un cóctel originario de México',        
        precio: '47.00',
        img: 'margarita.jpg'
    },
    {
        id:3,
        titulo: 'Martini',
        descripcionCorta: 'Martini, Dry Martini o Martini seco, un cóctel exquisito y sencillo',
        precio: '27.50',
        img: 'martini.jpg'
    },
    {
        id:4,
        titulo: 'Daiquiri',
        descripcionCorta: 'El cóctel cubano por excelencia',
        precio: '37.50',
        img: 'daiquiri.jpg'
    }
]

const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  receta: (req, res) => {
    // let receta = listaRecetas.find(receta => receta.id == req.params.menuId);
    // console.log(receta)
    // res.render("receta", { receta: receta });
    // res.send('Listado de Recetas');
    res.render("receta");
  }
};

module.exports = mainController;
