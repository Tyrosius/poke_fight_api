const jwt=require('jsonwebtoken');

const verifyToken=async(req,res,next)=>{/* try/catch */
    const bearer = req.headers.authorization;
    if(!bearer) throw new Error/* error definieren */
    const [,token]=bearer.split(' ');
    if(!token) throw new Error/* error definieren */
    const user =jwt.verify(token, process.env.JWT_SECRET);
    req.userId=user.id;
    next();
};

module.exports={verifyToken}