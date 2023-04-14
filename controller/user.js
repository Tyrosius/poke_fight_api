const {hashPassword,generateToken,comparePassword}=require('../utils/auth')
const User=require('../models/userSchema')

const getAllUser=async(req,res)=>{
const users=await User.find()
res.json(users)
};
const createUser=async(req,res)=>{
    const {email, username, password}=req.body;
const hash=hashPassword(password);
    const userCreate = await User.create({username:username,email:email,password:hash
    });
    const token = generateToken(userCreate._id);
    res.json({token})

};
const getUserById=(req,res)=>{

};
const updateUserById=(req,res)=>{

};
const deleteUserById=(req,res)=>{

};

module.exports={getAllUser,createUser,getUserById,updateUserById,deleteUserById}