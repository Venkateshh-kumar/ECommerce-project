const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secretKey = "my-secret-key";

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//login 
router.post("/login", async(req,res)=>{
  const {email, password} = req.body;
  try {
    if(!email || !password) return res.status(400).json({success:false, message:"email or password is required"});
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({success:false, message:"Invalid Credentials"});
    if(user.password !== password) return res.status(400).json({success:false, message:"Incorrect Password"});
    //success
    const payload = {
      email:user?.email,
      password:user?.password,
      id:user?._id
    }
    const token = jwt.sign(payload, secretKey);
    return res.status(200).json({
      success:true,
      data:token,
      message:"Logged in successfully"
    })

  } catch (error) {
    return res.status(500).json({success:false, message:"Internal server error", error:error})
  }
})

module.exports = router;
