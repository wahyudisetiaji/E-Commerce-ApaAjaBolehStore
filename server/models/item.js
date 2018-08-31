const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    itemName: {
        type: String,
        require: [true, 'name is required']
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    stock: {
        type: Number,
        required: [true, 'stock is required']
    },
    category: {
        type: String,
        required: [true, 'category is required']
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item

