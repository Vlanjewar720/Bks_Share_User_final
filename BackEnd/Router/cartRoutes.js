const express = require("express")

const cartController = require('../controller/cartController')

const router = express.Router();


router
  .route('/cart')

// router.delete('/cart/:id/', cartController.delcart) //getting user deleting product  cart


module.exports = router;