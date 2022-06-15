const express = require('express')
const { biodataControl } = require('../controllers')
const biodataRouter =  express.Router()


biodataRouter.get("/game/biodata", biodataControl.lihatData);
biodataRouter.get("/game/biodata/create", biodataControl.viewForm);
biodataRouter.get("/biodata/edit/:id", biodataControl.viewFormEdit);
biodataRouter.get("/biodata/delete/:id", biodataControl.deleteData);
biodataRouter.post("/biodata", biodataControl.createData);
biodataRouter.post("/biodata/edit/:id", biodataControl.updateData);
biodataRouter.get("/biodata/detail/:id", biodataControl.viewById)


module.exports = biodataRouter