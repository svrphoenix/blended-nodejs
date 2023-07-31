const { string } = require("joi");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    },
  refresh_token:String,
});
const User = model("user", userSchema);

module.exports = { User };