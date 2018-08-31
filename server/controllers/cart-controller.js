const Cart = require('../models/cart')
const jwt = require('jsonwebtoken')

class CartController {
    static createCart (req, res) {
        let token = req.headers.token
        let decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(decode);
        
    //     Cart.create({
            
    //     })
    }
}

module.exports = CartController