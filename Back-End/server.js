const app = require('./app')
const dotenv = require("dotenv")
const path=require('path')
const connectDatabse = require('./config/database')

dotenv.config({ path: path.join(__dirname, "config/.env") });
connectDatabse()

const server = app.listen(process.env.PORT, () => {
    console.log(`My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `)
})

