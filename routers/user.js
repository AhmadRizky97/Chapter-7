const express = require('express');
const { userController } = require('../controller');
const router = express.Router();
const restrict = require('../middleware/restrict');


router.get('/profile', restrict, userController.getProfil)

module.exports = router;