var express = require('express');
var router = express.Router();
var CartController = require('../controllers/cart-controller')

/* GET home page. */
router.post('/', CartController.createCart)

module.exports = router;