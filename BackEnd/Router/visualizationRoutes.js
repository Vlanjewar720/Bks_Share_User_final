const express  =require('express');
const router = express.Router();

const multer  =require('multer');
const path  = require('path');
const bodyParser = require('body-parser');
const visualizationController = require("../controller/visualizationController")

router.use(bodyParser.urlencoded({ extended:true}));

router.use(express.static(path.resolve(__dirname,'public')));

var storage  = multer.diskStorage({
    destination:(req ,file,cb)=>{
        cb(null,'./Uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

var upload = multer({storage:storage});

router.post('/importUser',upload.single('file'),visualizationController.importUser)

router.get("/getdata",visualizationController.getData)
module.exports = router;