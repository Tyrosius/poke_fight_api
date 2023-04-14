const jwt=require('jsonwebtoken');
const bcrypt =require('bcrypt');

const hashPassword = (password)=>{
    return bcrypt.hash(password,5)
};

const comparePassword  = (password,hash)=>{
return bcrypt.compare(password,hash)
}

const generateToken=(id)=>{
    const token=jwt.sign({id:id},process.env.JWT_SECRET);
    return token
};



module.exports={hashPassword,generateToken,comparePassword}