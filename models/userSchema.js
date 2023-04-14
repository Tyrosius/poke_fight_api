const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const userSchema = new Schema({
  username: {type: String, required: [true,'Username is required']},
  email: {type: String, required: [true,'E-Mail is required']},
  password: {type: String, required: [true,'Password is required'],select:false},
  battlecount: {type:Number,default:0},
  score: {type:Number,default:0},
  deck: {type: Array},
})

module.exports = model("User", userSchema);