const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/productModel')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog')
})

app.get('/product', async(req, res)=>{
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.get('/product/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



app.post('/product', async (req, res)=> {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }    
        
    
})

//update the product
app.put('/product/:id', async(req, res)=>{
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
})

//delete a product

app.delete('/product/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id);
        if(!product){
            return res.status(404).json({message: 'can not find any product with that ID'})
        }
        res.status(200).json(product);

    }catch(error) {

    }
})
mongoose.set("strictQuery", false)

mongoose.connect('mongodb+srv://krissyweber18:Y4eObPkRDSVB7pQC@cluster0.mbfyaey.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(3000, ()=>{
        console.log('Node API app is running on port 3000')
    } )
    
}).catch((error)=>{
    console,log(error)
})