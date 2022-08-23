const fs = require('fs');
const path = require("path");
const UsersFilePath = path.join(__dirname, '../src/data/usuariosDB.json');
const users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
const {validationResult} = require('express-validator')

const controladorUsuarios = {
    store: function(req, res){
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.render('index', {errors: errors.errors})
        } 
           // registro usuario

		let img
		console.log(req.files);
		if(req.files[0] != undefined){
			img = req.files[0].filename
		} else {
			img = 'default-foto.png'
		}
		let newUser = {
			id: users[users.length - 1].id + 1,
			...req.body,
			img: img
		};
		users.push(newUser)
		fs.writeFileSync(UsersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('/registro');
        
    }
};
module.exports = controladorUsuarios;
