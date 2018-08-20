const Item = require('../models/item')

class ItemController {

    //Create Item ------------------------>>>
    static createItem (req, res) {
        Item.create({
            itemName: req.body.itemName,
            image: req.body.image,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category,
        })
        .then((item) => {
            res.status(200).json({
                message: "item successfully created",
                data: item
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
    }

    //Find Item ------------------------>>>
    static findItem (req, res) {
        Item.find({})
        .then((items) => {
            res.status(200).json({
                message: "data all item",
                data: items
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
            
        });

    }

       //Find One Item ------------------------>>>
       static findOneItem (req, res) {
        let id = req.params.id
        Item.find({_id: id})
        .then((items) => {
            res.status(200).json({
                message: "data item",
                data: items
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
            
        });

    }

    //Delete Item ------------------------>>>
    static deleteItem (req, res) {
        let id = req.params.id
        Item.deleteOne({_id: id})
        .then((item) => {
            res.status(200).json({
                message: "item successfully deleted",
                data: item
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
    }

    //Update Item------------------------>>>
    static updateItem (req, res) {
        let id = req.params.id
        Item.updateOne({_id: id},{
            $set: {
                itemName: req.body.itemName,
                image: req.body.image,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category,
            }
        })
        .then((item) => {
            res.status(200).json({
                message: "item successfully update",
                data: item
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });

    }
}

module.exports = ItemController