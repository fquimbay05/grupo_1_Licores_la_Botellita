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
        
    },
	/*** Pagina de login de usuario ***/
    login: (req, res) => {
        return res.render("login");
    },
    /*** Ejecuta el login de usuario ***/
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email)
        if (userToLogin){
            let isOKThePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (isOKThePassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                console.log(req.body);
                if(req.body.remember){
                    res.cookie('userEmail', req.body.email, { maxAge: 60 * 1000, httpOnly: true });
                }
                return res.redirect('profile');
            }
            return res.render('login', {
                errors:{
                    email:{
                        msg:'Las credenciales son inválidas'
                    }
                }
            })
        }
        return res.render('login', {
            errors:{
                email:{
                    msg:'No se encuentra este email en nuestra base de datos'
                }
            }
        })
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect("/");
    }
};
module.exports = controladorUsuarios;
