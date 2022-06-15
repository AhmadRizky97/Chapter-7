///read data

const {Game} = require("../models");


async function viewAll (req, res) {
    try {
    let data = await Game.findAll();
    res.render('ViewData', {data});

   } catch (error) {
    console.log(error);
   }
}


async function createData (req, res) {
    try {
    let {title, genre, rating, year} = req.body;
    let input = {title, genre, rating, year};
    let data = await Game.create(input);
    res.render('create', {data});
} catch (error) {
    console.log(error);
}
}

async function viewForm (req,res) {
    try {
    res.render('create');
} catch (error) {
    console.log(error);
}
}

async function viewFormEdit (req,res) {
    
    try {
    let {id} = req.params
    let data = await Game.findOne ({ where: {id:id}});
    res.render('update', {data});
} catch (error) {
    console.log(error); 
}
}

async function updateData (req,res) {
    try {
    let { id } = req.params;
    let { title, genre, rating, year } = req.body 
    let input = { title, genre, rating, year };

    let data = await Game.update(input, {where: {id:id}});
    // res.status(200).json(data);
    res.redirect("/game");
} catch (error) {
    console.log(error);
}
}


async function deleteData (req,res) {
    try {
    let {id} = req.params;

    let data = await Game.destroy({where: {id:id}});
    // res.status(200).json(data);
    res.redirect("/game");
} catch (error) {
    console.log(error);
}
}

async function viewById (req,res) {
    try {
    let{id} =  req.params;

    let data = await Game.findOne({where: {id:id}});
    res.status(200).json({data});
} catch (error) {
    console.log(error);
}
}


module.exports = {viewAll, createData,viewForm,viewFormEdit, updateData, deleteData, viewById};