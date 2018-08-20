var express = require('express');
var router = express.Router();
const ItemController = require('../controllers/item-controller')
const images = require('../helpers/images')

/* GET items listing. */
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })
router.get('/', ItemController.findItem);
router.get('/item/:id', ItemController.findOneItem);
router.post('/', ItemController.createItem);
router.delete('/:id', ItemController.deleteItem);
router.put('/:id', ItemController.updateItem);

module.exports = router