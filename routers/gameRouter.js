const express = require('express')
const { gameControl } = require('../controllers')
const gameRouter =  express.Router()


gameRouter.get("/", gameControl.viewAll);
gameRouter.get("/create", gameControl.viewForm);
gameRouter.get("/edit/:id", gameControl.viewFormEdit);
gameRouter.get("/delete/:id", gameControl.deleteData);
gameRouter.post("/", gameControl.createData);
gameRouter.post("/edit/:id", gameControl.updateData);
gameRouter.get("/detail/:id", gameControl.viewById);
gameRouter.get("/login", gameControl.formLogin);
gameRouter.get("/register", gameControl.formRegister);


module.exports = gameRouter 