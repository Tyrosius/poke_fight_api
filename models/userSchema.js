const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: [true,'Username is required']},
  email: {type: String, required: [true,'E-Mail is required']},
  battlecount: 0,
  score: 0,
  deck: [0,1,2,3,4,5],
  password: {type: String, required: [true,'Password is required'],select:false},
})

module.exports = mongoose.model("User", userSchema);