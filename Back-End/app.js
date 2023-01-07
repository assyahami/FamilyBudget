const express = require('express')
const errormiddleware = require('./middlewares/error')
const products = require('./routes/productsRoutes')
const app = express()

app.use(express.json())

app.use('/api/v1', products)

app.use(errormiddleware)

module.exports=app