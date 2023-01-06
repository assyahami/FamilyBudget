const products = require('../modelSchema/productsSchema')

const getAllProducts = async (req, res) => {
    let getProducts = await products.find()
    console.log(getProducts);
    res.status(200).json({
        suceess: true,
        productsLength: getProducts.length,
        data: getProducts
    })
}

const addProducts = async (req, res) => {
    const crateProduct = await products.create(req.body)
    res.status(200).json({
        suceess: true,
        data: crateProduct
    })
}

const updateProducts = async (req, res) => {
    const updateProduct = await products.create(req.body)
    res.status(200).json({
        suceess: true,
        body: "update products"
    })
}
const deleteProducts = (req, res) => {
    res.status(200).json({
        suceess: true,
        body: "delete products"
    })
}

const getSingleProducts = (req, res) => {
    console.log(req.params);
    res.status(200).json({
        suceess: true,
        body: "single  products" + req.params.id
    })
}

module.exports = { getAllProducts, addProducts, updateProducts, deleteProducts, getSingleProducts }