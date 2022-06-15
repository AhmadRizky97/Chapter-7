const {User} = require('../models');
const passport = require('../lib/passport');


async function getProfil (req,res) {
    res.render('profile', req.user.dataValues)
}


module.exports = {getProfil}