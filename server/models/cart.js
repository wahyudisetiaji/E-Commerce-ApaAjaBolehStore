const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Item"}
    ]
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

var Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart