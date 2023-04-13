const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  battlecount: 0,
  score: 0,
  deck: [0,1,2,3,4,5],
  password: {type: String, required: true},
  email: {type: String, required: true},
})

module.exports = mongoose.model("User", userSchema);