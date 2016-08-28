
var router = require('express').Router();
var signupController = require('../controllers/signupController.js')

router.post('/signup', signupController.users.post);
router.post('/login', signupController.users.signin);

module.exports = router;