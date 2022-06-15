const {User} = require('../models');
const passport = require('../lib/passport');

async function formRegister (req,res) {
    res.render('register')
}

async function register (req,res) {
    try {
    let data = await User.register(req.body);
    console.log(data)
    res.redirect('/auth/login');
    } catch (error) {
      console.log(error);
    }
}

async function formLogin (req,res) {
    res.render('login')
}

async function login () {
    passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
    });
}



module.exports = { formRegister , register, formLogin, login };