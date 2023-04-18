const {hashPassword,generateToken,comparePassword}=require('../utils/auth')
const User=require('../models/userSchema');
const { asyncHandler, ErrorResponse } = require('../utils/easylife');

const getAllUser=async(req,res)=>{
const users=await User.find()
res.json(users)
};
const createUser=asyncHandler(async(req,res)=>{/* bereits vorhanden? */
    const {email, username, password}=req.body;
const hash=hashPassword(password);
    const userCreate = await User.create({username:username,email:email,password:hash
    });
    const token = generateToken(userCreate._id);
    res.json({token})

});

const checkUser=asyncHandler(async(req,res)=>{
    const {email, password}=req.body;
    const foundUser = User.findOne({email:email}).select('+password');
    if (!foundUser) throw new ErrorResponse("User doesn't exists", 404);
    const isValid = comparePassword(password, foundUser.password);
    if (!isValid) throw new ErrorResponse('Incorrect password', 401);
    const token = createJWT(foundUser._id);
    res.json({ token });
});

const getUserById=asyncHandler(async(req, res) => {
    const { userId } = req;
    const user = await User.findById(userId);
    res.status(201).json(user);
});
const updateUserById=(req,res)=>{
/* TODO  */
};
const deleteUserById=(req,res)=>{
/* TODO */
};

module.exports={getAllUser,createUser,getUserById,updateUserById,deleteUserById,checkUser}