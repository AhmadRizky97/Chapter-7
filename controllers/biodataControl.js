///read data

///read data

const {Game_biodata} = require("../models");


async function lihatData (req, res) {
    try {
    let data = await Game_biodata.findAll();
    res.render('biodata', {data});

   } catch (error) {
    console.log(error);
   }
}


async function createData (req, res) {
    try {
    let {name, gender, username, password} = req.body;
    let input = {name, gender, username, password};
    let data = await Game_biodata.create(input);
    res.render('buat', {data});
} catch (error) {
    console.log(error);
}
}

async function viewForm (req,res) {
    try {
    res.render('buat');
} catch (error) {
    console.log(error);
}
}

async function viewFormEdit (req,res) {
    
    try {
    let {id} = req.params
    let data = await Game_biodata.findOne ({ where: {id:id}});
    res.render('bioup', {data});
} catch (error) {
    console.log(error); 
}
}

async function updateData (req,res) {
    try {
    let { id } = req.params;
    let { name, gender, username, password } = req.body 
    let input = { name, gender, username, password };

    let data = await Game_biodata.update(input, {where: {id:id}});
    // res.status(200).json(data);
    res.redirect("/game/biodata");
} catch (error) {
    console.log(error);
}
}


async function deleteData (req,res) {
    try {
    let {id} = req.params;

    let data = await Game_biodata.destroy({where: {id:id}});
    // res.status(200).json(data);
    res.redirect("/game/biodata");
} catch (error) {
    console.log(error);
}
}

async function viewById (req,res) {
    try {
    let{id} =  req.params;

    let data = await Game_biodata.findOne({where: {id:id}});
    res.status(200).json({data});
} catch (error) {
    console.log(error);
}
}




module.exports = {lihatData, createData,viewForm,viewFormEdit, updateData, deleteData, viewById};