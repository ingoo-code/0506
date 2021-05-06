const express = require('express');
const router = express.Router();
const mainRouter = require('./main/index');
const userRouter = require('./user/index');

// URL 관리하는 파일로 따로뺌.
router.use('/user',userRouter);
router.use('/',mainRouter);


module.exports = router;