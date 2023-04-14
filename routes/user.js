const {Router}=require('express');
const{getAllUser,createUser,getUserById,updateUserById,deleteUserById} =require('../controller/user.js')
const {verifyToken}=require('../middleware/auth.js')

const userRouter = Router();

userRouter.get('/',getAllUser);/* für highscore */
userRouter.post('/',createUser);
userRouter.get('/:id',getUserById);/* für auth */
userRouter.put('/:id',verifyToken,updateUserById);/* nur auth, für deck-speichern, score und battlecount erhöhen */
userRouter.delete('/:id',verifyToken,deleteUserById);/* nur auth */

module.exports=userRouter