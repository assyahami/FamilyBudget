const catchAsyncError = require('../middlewares/catchAsyncError')
const Products = require('../modelSchema/productsSchema')
const ErrorHandler = require('../utils/errorHandler')

const getAllProducts = async (req, res) => {
    let getProducts = await Products.find()

    res.status(200).json({
        suceess: true,
        productsLength: getProducts.length,
        data: getProducts
    })
}

const addProducts = catchAsyncError(async (req, res) => {
    const crateProduct = await Products.create(req.body)
    res.status(200).json({
        suceess: true,
        data: crateProduct
    })
})

const updateProducts = async (req, res, next) => {
    let updateProduct = await Products.findById(req.params.id)

    if (!updateProduct) {
        return next(new ErrorHandler("Product can't be updated", 400))
    }
    updateProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        suceess: true,
        body: updateProduct
    })
}

const diabledProducts = async (req, res, next) => {
    let disbleProduct = await Products.findById(req.params.id)

    if (!disbleProduct) {
        return next(new ErrorHandler("Product can't be found", 404))
    }

    disbleProduct = await Products.findByIdAndUpdate(disbleProduct, { status: false })

    res.status(200).json({
        suceess: true,
        body: disbleProduct
    })

}

const getSingleProducts = async (req, res, next) => {
    let singleProduct = await Products.findById(req.params.id)

    if (!singleProduct) {
        return next(new ErrorHandler(`Product can't be found: ${req.params.id}`, 404))
    }

    res.status(200).json({
        suceess: true,
        body: singleProduct
    })
}

module.exports = {
    getAllProducts,
    addProducts,
    updateProducts,
    deleteProducts: diabledProducts,
    getSingleProducts
}