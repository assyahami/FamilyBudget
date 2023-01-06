const express = require('express')
const { getAllProducts,addProducts, updateProducts, deleteProducts, getSingleProducts  } = require('../controller/products')
const router = express.Router()

router.route('/products')
    .get(getAllProducts)
router.route('/admin/product/new').post(addProducts)

router.route('/products/:id')
.get(getSingleProducts)
.put(updateProducts)
.delete(deleteProducts)

module.exports=router