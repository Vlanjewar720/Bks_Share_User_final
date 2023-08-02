const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

// create schema
const salt = bcrypt.genSaltSync(10)

const signupSchema = new Schema({
    firstName: {
        type:String,
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,   
        unique:true 
    },
    password:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    address:{
     type:String
    },
    pincode:{
      type:String
    },
    city:{
      type:String
    },
    img:{
        type:String,
        default: 'user-profile.png'
    },
    role:{
      type:String,
      default:"user"
    },
    otp:{
      type:Number
    },
    bookimg:{
    type:String,
    default:"book.jpg"
    },
    role:{
      type:String,
      default:"user"
    }

});


const productSchema = new Schema({
  title:{type:String, require:true},
  city:{type:String},
  Date:{type:Date ,default: Date.now,},
  description:{type:String,require:true},
  price:{type:String,require:true},
  img:{type:String,default:"demo.jpg"},
  noofbooks:{type:String},
  type:{type:String},
  status:{type:String,default:"Pending"},
  bargain:{type:String,default:"no"},
  message:{type:String,default:"Pending"},
  created: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', required: true },
  type:{type:String,default:"sell"}

})




const cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'signup',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const visualizationSchema  = new Schema({
  BuyBook : {
    type: Number,
  },
  SellBook:{
    type: Number,
  },
  DonateBook:{
    type: Number,
  },
  Month:{
    type: String,
  }
})

signupSchema.pre('save', function(next) {
    if (this.isModified('password')) { // check if password is modified then has it
      var user = this;
      bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    } else {
      next();
    }
  });

signupSchema.methods.correctPassword=async function(
    candidatePassword,
    userPassword
){
 return await bcrypt.compare(candidatePassword,userPassword)
};


const Signup = mongoose.model('signup',signupSchema);

const Addcart = mongoose.model('addcart',cartSchema);
const Products = mongoose.model('products',productSchema);
const visualization = mongoose.model('visualization',visualizationSchema);

module.exports = {
  Signup,
  Addcart,
  Products,
  visualization
};
