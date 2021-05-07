const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

//해당폴더의 하위 URL을 관리하는 파일.
// localhost:3000/대분류/중분류
// localhost:3000/user/[중분류]
router.get('/join',controller.join) // http://localhost;3000/user/join
router.get('/login',controller.login)
router.get('/logout',controller.logout);
router.get('/info',controller.info)
router.post('/join_success',controller.join_success);
router.post('/login_check',controller.login_check);


module.exports = router;