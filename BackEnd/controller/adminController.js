const {Signup,Products,Addcart} = require("../model/Schema")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')


const loginToken = id => {
    return jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
      expiresIn: "1h"
    })
  }


exports.loginAdmin = async function(req, res, next) {
    const { email, password,role } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password are required."
      });
    }

  
    const user = await Signup.findOne({ email }).select('+password');
  
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found."
      });
    }
  
    if(user.role!=="admin"){
      return res.status(401).json({
          status: "error",
          message: "not a admin"
        });
    }
    console.log('Entered password:', password);
    console.log('Stored hashed password:', user.password);

    const passwordMatch = await user.correctPassword(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({
        status: "error",
        message: "Incorrect password."
      });
    }
 
  
    const token = loginToken(user)
  
    res.status(200).json({
      token,
      data: {
        user
      }
    });
  }

exports.updateprofile = async(req,res)=>{
  const { id } = req.params;
  const { email, firstName, lastName, phone } = req.body;

  try {
    const user = await Signup.findByIdAndUpdate(
      {_id:id},
      { $set: { email, firstName, lastName, phone } },
      { new: true, runValidators: true }
    ).select('+password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (req.file) {
      // If a file is uploaded, update the image field
      user.img = req.file.filename;
    }

    await user.save({ validateBeforeSave: false });
    const updatedUser = await Signup.findById(id).select('+password');

    res.json({
      user: updatedUser,
    });

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}


  exports.updatemyprice = async function(req,res){
    const {id} = req.params;
    const data = req.body;
    try {
      const user = await Products.findOneAndUpdate({ _id: id }, data);
    
      if (!user) {
        res.status(404).json({ message: 'user Not Found'});
      } else {
        res.status(200).json({
              data: {
                user
              }
        });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}