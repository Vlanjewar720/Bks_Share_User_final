mongoose = require("mongoose")
const path = require('path');

const express = require("express")
const adminController = require("../controller/adminController");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: '../BSAlatest19/public/adminProfile',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});
const upload = multer({ storage: storage });

router
  .route("/admin/login")
  .post(adminController.loginAdmin)

  router.put("/products/:created/", adminController.updatemyprice)  //getting user uploading product 
  router.put("/admin/:id",upload.single("img"), adminController.updateprofile)  //getting user uploading product 



module.exports = router;
