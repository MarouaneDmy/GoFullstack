const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product')

router.get('/:id', productCtrl.getOneProduct)
router.get('/', productCtrl.getAllProducts);
router.post('/', productCtrl.createProduct);
router.put('/:id', productCtrl.modifyProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;