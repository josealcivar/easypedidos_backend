var express = require('express');
var router = express.Router();
var controller = require('../controller/login_controller');

/* POST Login Users. */
router.post('/login', controller.loginUsers);

module.exports = router;