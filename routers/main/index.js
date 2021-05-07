const express = require('express');
const router = express.Router();
const controller = require('./main.controller')

// localhost:3000/대분류/중분류
router.use('/',controller.dd);

module.exports = router;