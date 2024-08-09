// const User = require('../models/usermodel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const userCtrl={}

// // Create a new user
// userCtrl.createUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // User login
// userCtrl.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({ token });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a user
// userCtrl.updateUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const { email, oldpassword, newpassword } = req.body;

//     const user = await User.findById(userId);
//     if (!user || !(await bcrypt.compare(oldpassword, user.password))) {
//       return res.status(401).json({ error: 'Invalid old password' });
//     }

//     const hashedNewPassword = await bcrypt.hash(newpassword, 10);
//     const updatedUser = await User.findByIdAndUpdate(userId, { email, password: hashedNewPassword }, { new: true });
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a user
// userCtrl.deleteUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findByIdAndDelete(userId);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };


// module.exports=userCtrl


const User = require('../models/usermodel');
//const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const nodemailer= require('nodemailer')

const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const userCtrl = {};

// Create a new user
userCtrl.register = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// User login
userCtrl.loginUser = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


userCtrl.updateUser = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { userId } = req.params; // Extract userId from request parameters
    const { email, oldpassword, newpassword } = req.body;

    console.log(`Searching for user with ID: ${userId}`); // Debug log

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid old password' });
    }

    const hashedNewPassword = await bcrypt.hash(newpassword, 10);
    const updatedUser = await User.findByIdAndUpdate(userId, { email, password: hashedNewPassword }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(400).json({ error: err.message });
  }
};

// Delete a user
userCtrl.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = userCtrl;





// forgetpassword
userCtrl.forgotPassword = async (req,res) =>{
  const {email} = req.query 
  // console.log(email)

  try{
  const user = await User.findOne({email : email})
  // console.log(user)
  if(user){
      let mailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'gangadhar7683@gmail.com',
              pass: 'dnhw zbeo iwmc tjdh'
          }
      });

      const number = Math.floor(Math.random() * 90000) + 10000
      const tokendata = {number : number , email : email}
      const token = jwt.sign(tokendata,process.env.JWT_SECRET,{expiresIn : "10min"})
      res.status(200).json({token : token})
      // console.log(tokendata)
      
      let mailDetails = {
          from: 'gangadhar7683@gmail.com',
          to: `${user.email}`,
          subject: 'product-assignment(reset - password-link)',
          html : `<a href=http://localhost:5000/forgot-password?token=${token}>Click here to reset your password</a>
          <p>OTP for changing password - <b>${number}</b></p>
          <p>This link will be valid for only 10 minutes</p>`,
      };
      
      mailTransporter.sendMail(mailDetails, function(err, data) {
          if(err) {
              console.log('Error Occurs');
          } else {
              console.log('Email sent successfully');
          }
      })
  }else{
      res.status(404).json("email not found")
  }
}catch(e){
  res.status(500).json(e)
  console.log(e)
}
}


userCtrl.resetPassword = async (req,res) =>{
  const {password ,email,token,otp} = req.body
  try{
      const tokendata = await jwt.verify(token,process.env.JWT_SECRET)
  
      if(tokendata.number !== Number(otp)){
          return res.status(400).json("invalid otp")
      }
      const salt = await bcryptjs.genSalt()
      const newPassword = await bcryptjs.hash(password,salt)
      await User.findOneAndUpdate({email : email},{password : newPassword})
      res.status(200).json("password reset successfull")

  }catch(e){
      res.status(500).json(e)
  }
}
