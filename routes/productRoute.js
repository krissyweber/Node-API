const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const {getProducts, createProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/productController')

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:id', getProduct );

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;