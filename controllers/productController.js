const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

//create a new product
const createProduct = asyncHandler(async (req, res)=> {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.message);
        res.status(500);
        throw new Error(error.message);
    }    
})

// get all products
const getProducts = asyncHandler(async(req, res)=>{
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

//get individual product
const getProduct = asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

//update the product
const updateProduct = asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
             res.status(404);
             throw new Error( `can not find any product with ID ${id}`);
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    }catch(error){
        res.status(500);
        throw new Error(error.message); 
    }
})

//delete a product
const deleteProduct = asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404);
            throw new Error( `can not find any product with ID ${id}`);
        }
        res.status(200).json(product);

    }catch(error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}