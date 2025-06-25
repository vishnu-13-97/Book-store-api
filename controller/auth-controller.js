const User = require("../model/usermodel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "All fields Required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exist",
      });
    }
    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedpassword });

    await newUser.save();

    res.status(201).json({
      status: true,
      message: "user registered succesfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const login = async(req,res)=>{
  try {
    const {email,password}=req.body;
    const user = await User.findOne({email});
    
    
    if(!user){
      return res.status(404).json({
        status:false,
        message:"not a registered user"
      })
    }

 const comparePassword = await bcrypt.compare(password,user.password);
    
if(!comparePassword){
   return res.status(404).json({
        status:false,
        message:"Invalid Password"
      })
}

const token = jwt.sign({
  name:user.name,
  email:user.email,
  id:user._id,
  isAdmin: user.isAdmin
},process.env.JWT_SECRET_KEY,{
        expiresIn: "2h",    
      })

res.status(200).json({
  status:true,
  message:"login successfull",
  id:user._id,
  name:user.name,
  email:user.email,
  token:token
})

  } catch (error) {

    console.log(error);
    
     res.status(500).json({
      status: false,
      message: "server error",
    });
  }
}

const updatePassword = async (req,res)=>{
  try {
    const {oldPassword,newPassword}=req.body;
const user = await User.findById(req.user.id);
const compareOldpassword = await bcrypt.compare(oldPassword,user.password)
   if(!compareOldpassword){
    return res.status(400).json({
      status:"false",
      message:"wrong old Password"
    })
}

if(compareOldpassword === newPassword){
   return res.status(400).json({
      status:"false",
      message:"Passwords could not be same"
    })
}

const hashedPassword = await bcrypt.hash(newPassword,10);


user.password = hashedPassword;
await user.save();

res.status(200).json({
  status:true,
  message:"password updated successfully"
})


  } catch (error) {
       console.log("server error",error);
     res.status(500).json({
      status: false,
      message: 'Server error',
    });
    
    
  }
}


const logOut = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true, 
      sameSite: 'Lax', 
    });

    return res.status(200).json({ status: true, message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

module.exports = {
  register,
  login,
  logOut,
  updatePassword
};
