const Product = require('../models/productModel')

//create a new product
const createProduct = async (req, res)=> {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }    
        
    
}
// get all products
const getProducts = async(req, res)=>{
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

//get individual product
const getProduct = async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

//update the product
const updateProduct = async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: 'can not find any product with that ID'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    }catch(error){
        res.status(500).json({message:error.message}) 
    }
}

//delete a product
const deleteProduct = async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: 'can not find any product with that ID'})
        }
        res.status(200).json(product);

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}