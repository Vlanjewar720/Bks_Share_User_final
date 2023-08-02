const {Signup} = require("../model/Schema")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const nodemailer= require("nodemailer")


exports.sendOtp = async (req, res) => {
    console.log(req.body);
    const _otp = Math.round(10000 + Math.random() * 90000);
    console.log(_otp);
  
    let user = await Signup.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }
  
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secureConnection: false,
      auth: {
        user: "swapnilnikose04@gmail.com",
        pass: "agbnlvtoepimczxx",
      },
    });
  
    try {
      let info = await transporter.sendMail({
        from: "patilarati435@gmail.com",
        to: req.body.email,
        subject: "OTP",
        text: String(_otp),
        html: `<html><body> 
        <form>
          <button type="submit" >Submit</button>
        </form>
        <script type="text/javascript">alert("Hello")</script>
        </body></html>`,
      });
  
      if (info.messageId) {
        console.log(info, 84);
        Signup.updateOne({ email: req.body.email }, { otp: _otp })
          .then((result) => {
            res.status(200).json({ message: "OTP sent" });
          })
          .catch((err) => {
            res.status(500).json({ message: "Server error" });
          });
      } else {
        res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      console.log("An error occurred while sending the OTP:", error);
      res.status(500).json({ message: "An error occurred while sending the OTP" });
    }
  };
  
