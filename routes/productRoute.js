const express = require('express');

const Product = require('../models/productModel');
const {getProducts, createProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router();

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:id', getProduct );

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;