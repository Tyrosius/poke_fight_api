const {hashPassword,generateToken,comparePassword}=require('../utils/auth')
const User=require('../models/userSchema');
const { asyncHandler, ErrorResponse } = require('../utils/easylife');

const getAllUser=asyncHandler(async(req,res)=>{
const users=await User.find()
res.json(users)
});

const createUser=asyncHandler(async(req,res)=>{
    const {email, username, password}=req.body;
    const foundEmail = await User.findOne({ email });
    if (foundEmail) throw new ErrorResponse('User already exists', 400);
    const foundName = await User.findOne({ email });
    if (foundName) throw new ErrorResponse('User already exists', 400);
    const hash=await hashPassword(password);
    const userCreate = await User.create({username:username,email:email,password:hash
    });
    const token = generateToken(userCreate._id);
    res.json({token})

});

const checkUser=asyncHandler(async(req,res)=>{
    const {email, password}=req.body;

    const foundUser = await User.findOne({email:email,}).select('+password');

    if (!foundUser) throw new ErrorResponse("User doesn't exists", 404);
    const isValid = comparePassword(password, foundUser.password);
    if (!isValid) throw new ErrorResponse('Incorrect password', 401);
    const token = generateToken(foundUser._id);

    res.json({ token });
});

const getUserById=asyncHandler(async(req, res) => {
    const { userId } = req;
    const user = await User.findById(userId);

    res.status(201).json(user);
});

const updateUserById=asyncHandler(async(req,res)=>{
const { userId}=req;
res.send('not implemented yet');
});
const deleteUserById=(req,res)=>{
/* TODO */
};

module.exports={getAllUser,createUser,getUserById,updateUserById,deleteUserById,checkUser}