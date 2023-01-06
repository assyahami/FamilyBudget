const products = require('../data/products.json')
const ProductModal = require('../modelSchema/productsSchema')
const dotenv = require("dotenv");
const connectDatabase = require('../config/database');

dotenv.config({ path: "config/.env" });
connectDatabase()

const setProducts = async () => {
    try {
        await ProductModal.deleteMany()
        console.log('products delete');
        await ProductModal.insertMany(products)
        console.log('products added');
    } catch (error) {
        console.log('err'+error);
    }
}

setProducts()