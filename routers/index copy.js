const express = require('express');
const restrict = require('../middleware/restrict');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');


router.get('/', restrict, (req, res) => res.render ('index'));
router.use('/auth', authRouter);
router.use('/user', userRouter);


module.exports = router;