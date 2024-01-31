require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog')
})

app.use(errorMiddleware);

mongoose.set("strictQuery", false)

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=>{
        console.log(`Node API app is running on port ${PORT}`)
    });
    
}).catch((error)=>{
    console.log(error)
})