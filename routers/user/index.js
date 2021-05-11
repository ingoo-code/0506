const express = require('express');
const router = express.Router();
const multer = require('multer');
const controller = require('./user.controller');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
}),
});

//해당폴더의 하위 URL을 관리하는 파일.
// localhost:3000/대분류/중분류
// localhost:3000/user/[중분류]
router.get('/join',controller.join)// http://localhost;3000/user/join
router.get('/login',controller.login)
router.get('/logout',controller.logout);
router.get('/info',controller.info)
router.post('/join_success',upload.single('img'),controller.join_success);
router.post('/login_check',controller.login_check);


module.exports = router;