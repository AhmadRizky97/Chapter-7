const express = require('express');
const gameRouter = require('./gameRouter');
const router = express.Router();

router.get('/', (req,res) => res.render ('ViewData'));
router.use('/game', gameRouter);


module.exports = router;