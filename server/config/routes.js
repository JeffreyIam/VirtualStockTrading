var router = require('express').Router();
var signupController = require('../controllers/signupController.js');
var stocksController = require('../stocks/stocksController.js');

router.post('/signup', signupController.users.post);
router.post('/login', signupController.users.signin);
router.post('/watchlist', stocksController.stock);

module.exports = router;