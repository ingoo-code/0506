const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

//해당폴더의 하위 URL을 관리하는 파일.
// join login info
router.use('/join',controller.join)
router.use('/login',controller.login)
router.use('/info',controller.info)


module.exports = router;