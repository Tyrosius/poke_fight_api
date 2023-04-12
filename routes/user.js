const {Router}=require('express');
const{} =require('../controller/users.js')

const userRouter = Router();

userRouter.get('/',()=>{});
userRouter.post('/',createUser);
userRouter.get('/:id',getUserById);
userRouter.push('/:id',updateUserById);
userRouter.delete('/:id',deleteUserById);

module.exports=userRouter