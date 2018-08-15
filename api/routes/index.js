const express = require('express')
const router = express.Router()
// Add all routes here
const cart = require('./cart/cart.controller')
router.use('/cart', cart)
module.exports = router
