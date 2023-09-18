require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL


app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.use('/api/product', productRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog')
})


mongoose.set("strictQuery", false)

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=>{
        console.log('Node API app is running on port')
    });
    
}).catch((error)=>{
    console.log(error)
})