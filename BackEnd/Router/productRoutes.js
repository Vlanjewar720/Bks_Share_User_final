const express = require("express")

const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer")
const {Signup,Products,Addcart} = require("../model/Schema")
const productController = require("../controller/productController")


const router = express.Router();

const customStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destination1 = '../Front-end/public/books'; // First destination
    const destination2 = '../../BSAlatest19/public/books';     // Second destination

    // Ensure both destination directories exist
    fs.mkdirSync(destination1, { recursive: true });
    fs.mkdirSync(destination2, { recursive: true });

    cb(null, destination1); // Set the temporary destination to the first one
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

const uploadMiddleware = multer({ storage: customStorage });





// API endpoint for creating a product with dynamic storage based on 'type' query parameter
router.post('/products', uploadMiddleware.single('img'), async (req, res, next) => {
  // Move the uploaded file to the second destination
  const sourcePath = req.file.path;
  const destinationPath2WithFile = path.join(__dirname, '../../BSAlatest19/public/books', req.file.filename);

  // Create the destination directory if it doesn't exist
  const destinationDir = path.dirname(destinationPath2WithFile);
  fs.mkdirSync(destinationDir, { recursive: true });

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destinationPath2WithFile);

  readStream.on('error', (err) => {
    console.error('Error reading the source file:', err);
    res.status(500).json({ error: 'Error reading the source file' });
  });

  writeStream.on('error', (err) => {
    console.error('Error writing the file to the second destination:', err);
    res.status(500).json({ error: 'Error writing the file to the second destination' });
  });

  writeStream.on('finish', async () => {
    // Call the controller function to handle the product creation
    try {
      const { title, description, price, created, noofbooks } = req.body;
      // Find the user by their ID
      const user = await Signup.findById(created);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Create a new product with the user ID and the uploaded filename
      const newProduct = new Products({
        img: req.file.filename,
        title,
        description,
        price,
        noofbooks,
        created: user._id,
      });

      // Save the product to the database
      await newProduct.save();

      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  readStream.pipe(writeStream);
});

router.post('/donate', uploadMiddleware.single('img'), async (req, res, next) => {
  // Move the uploaded file to the second destination
  const sourcePath = req.file.path;
  const destinationPath2WithFile = path.join(__dirname, '../../BSAlatest19/public/books', req.file.filename);

  // Create the destination directory if it doesn't exist
  const destinationDir = path.dirname(destinationPath2WithFile);
  fs.mkdirSync(destinationDir, { recursive: true });

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destinationPath2WithFile);

  readStream.on('error', (err) => {
    console.error('Error reading the source file:', err);
    res.status(500).json({ error: 'Error reading the source file' });
  });

  writeStream.on('error', (err) => {
    console.error('Error writing the file to the second destination:', err);
    res.status(500).json({ error: 'Error writing the file to the second destination' });
  });

  writeStream.on('finish', async () => {
    // Call the controller function to handle the product creation
    try {
      const { title, description, price, created, noofbooks } = req.body;
      // Find the user by their ID
      const user = await Signup.findById(created);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Create a new product with the user ID and the uploaded filename
      const newProduct = new Products({
        img: req.file.filename,
        title,
        description,
        price,
        noofbooks,
        type:"donate",
        created: user._id,
      });

      // Save the product to the database
      await newProduct.save();

      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  readStream.pipe(writeStream);
});




router
  .route('/products')

  
router.get("/products", productController.getProducts)  //getting  all products 

// router.put("/product/:created/image", upload.single("img"), productController.uploadBook)  //uploading a book user to the database

router.get("/products/:created/", productController.getMyProducts)  //getting user uploading product 

router.put("/products/:id/done", productController.accepted)  //getting user uploading product 
router.put("/products/:id/bargain", productController.bargain)  //getting user uploading product 
router.delete("/products/:id/", productController.denied)  //getting user uploading product 

router.post("/cart/addcart/", productController.Addcart)  //add to cart page user point of view

router.get("/cart/getcart/:userId", productController.getcart) // getting thats carts







//deleting products
router.delete('/cart/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    // Remove the cart item from the database
    const result = await Addcart.deleteOne({ product: productId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Cart item removed successfully' });
  } catch (error) {
    console.error('Failed to remove cart item:', error);
    res.status(500).json({ error: 'Failed to remove cart item' });
  }
});


  module.exports = router;